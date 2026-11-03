/* ============================================================
   Contact widget — 右上角「聯繫我」按鈕 + 表單彈窗 → Google 試算表
   ------------------------------------------------------------
   設定：把下面 ENDPOINT 換成你部署 Google Apps Script 後拿到的
   「網頁應用程式網址」（結尾是 /exec）。
   ============================================================ */
(function () {
  'use strict';

  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbwoE1MHBnODK_NB64yxoDH1hW8fH8U66UAlkOJHFxdR4ZAZM4tA2M9bDgEHZN9beCM4nA/exec';

  /* ---------- 樣式：沿用網站的 token（IBM Plex Mono、黑白、咖啡色 accent） ---------- */
  var css = [
    '.ct-btn{display:inline-flex;align-items:center;gap:11px;font-family:var(--font-mono);font-size:clamp(15.4px,1.68vw,18.2px);letter-spacing:.14em;text-transform:uppercase;color:#0e0e0e;background:transparent;border:1px solid #0e0e0e;padding:10px 20px;cursor:pointer;line-height:1;white-space:nowrap;transition:background .2s ease,color .2s ease}',
    '.ct-btn:hover,.ct-btn:focus-visible{background:#0e0e0e;color:#fff;opacity:1;text-decoration:none;outline:none}',
    '.ct-btn .ct-dot{width:8px;height:8px;border-radius:50%;background:var(--accent-coffee,#b79d8a);flex:none}',
    '.ct-overlay{position:fixed;inset:0;z-index:200;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(14,14,14,.42);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}',
    '.ct-overlay[data-open="1"]{display:flex;animation:ctFade .25s ease both}',
    '.ct-panel{position:relative;width:100%;max-width:520px;max-height:calc(100vh - 32px);overflow:auto;background:#fff;color:#0e0e0e;padding:clamp(28px,5vw,44px);font-family:var(--font-sans);animation:ctIn .3s cubic-bezier(.2,.7,.2,1) both}',
    '.ct-label{font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#969696}',
    '.ct-title{margin:14px 0 6px;font-weight:700;font-size:clamp(26px,4vw,34px);line-height:1.08;letter-spacing:-.01em}',
    '.ct-sub{margin:0 0 26px;font-size:14px;line-height:1.7;color:#6b6b6b}',
    '.ct-field{display:block;margin-bottom:18px}',
    '.ct-field span{display:block;margin-bottom:6px;font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#6b6b6b}',
    '.ct-field input,.ct-field select,.ct-field textarea{width:100%;font:inherit;font-size:15px;color:#0e0e0e;background:transparent;border:0;border-bottom:1px solid #d9d9d9;border-radius:0;padding:8px 0;outline:none;transition:border-color .2s ease;-webkit-appearance:none;appearance:none}',
    '.ct-field textarea{resize:vertical;min-height:110px;line-height:1.6}',
    '.ct-field select{background-image:linear-gradient(45deg,transparent 50%,#0e0e0e 50%),linear-gradient(135deg,#0e0e0e 50%,transparent 50%);background-position:calc(100% - 10px) 55%,calc(100% - 5px) 55%;background-size:5px 5px;background-repeat:no-repeat;cursor:pointer}',
    '.ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{border-bottom-color:#0e0e0e}',
    '.ct-hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;overflow:hidden}',
    '.ct-actions{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:28px}',
    '.ct-submit{font-family:var(--font-mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:#0e0e0e;border:1px solid #0e0e0e;padding:12px 22px;cursor:pointer;transition:background .2s ease,color .2s ease}',
    '.ct-submit:hover{background:#fff;color:#0e0e0e}',
    '.ct-submit[disabled]{opacity:.45;cursor:wait}',
    '.ct-status{font-family:var(--font-mono);font-size:11px;letter-spacing:.02em;line-height:1.6;color:#6b6b6b;min-height:1.6em}',
    '.ct-status[data-tone="err"]{color:#b05e4f}',
    '.ct-close{position:absolute;top:14px;right:14px;width:36px;height:36px;border:0;background:transparent;font-size:24px;line-height:1;color:#0e0e0e;cursor:pointer}',
    '.ct-close:hover{opacity:.55}',
    '.ct-done{text-align:center;padding:28px 0 8px}',
    '.ct-done .ct-title{margin-top:18px}',
    '@keyframes ctFade{from{opacity:0}to{opacity:1}}',
    '@keyframes ctIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
    '@media (max-width:600px){.ct-actions{flex-direction:column-reverse;align-items:stretch}.ct-submit{width:100%}nav .ct-btn{position:absolute;top:9px;right:20px;padding:8px 14px}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- 彈窗 ---------- */
  var overlay = document.createElement('div');
  overlay.className = 'ct-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'ctTitle');
  overlay.innerHTML =
    '<div class="ct-panel">' +
      '<button type="button" class="ct-close" aria-label="關閉" data-ct-close>&times;</button>' +
      '<div data-ct-view="form">' +
        '<div class="ct-label">[ Get in touch ]</div>' +
        '<h2 class="ct-title" id="ctTitle">聯繫我</h2>' +
        '<p class="ct-sub">工作邀約、合作提案或單純打聲招呼都歡迎，我會盡快回覆。</p>' +
        '<form novalidate>' +
          '<label class="ct-field"><span>姓名 Name *</span><input name="name" maxlength="80" autocomplete="name" required></label>' +
          '<label class="ct-field"><span>Email *</span><input name="email" type="email" maxlength="120" autocomplete="email" required></label>' +
          '<label class="ct-field"><span>類型 Topic</span><select name="topic">' +
            '<option value="工作邀約">工作邀約 · Job</option>' +
            '<option value="合作提案">合作提案 · Collaboration</option>' +
            '<option value="其他">其他 · Other</option>' +
          '</select></label>' +
          '<label class="ct-field"><span>訊息 Message *</span><textarea name="message" maxlength="2000" required></textarea></label>' +
          '<label class="ct-hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>' +
          '<div class="ct-actions"><div class="ct-status" aria-live="polite"></div><button type="submit" class="ct-submit">送出 Send →</button></div>' +
        '</form>' +
      '</div>' +
      '<div data-ct-view="done" class="ct-done" hidden>' +
        '<div class="ct-label">[ Sent ]</div>' +
        '<h2 class="ct-title">謝謝你的訊息</h2>' +
        '<p class="ct-sub">已經收到了，我會盡快回覆你。</p>' +
        '<button type="button" class="ct-submit" data-ct-close>關閉 Close</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var form = overlay.querySelector('form');
  var statusEl = overlay.querySelector('.ct-status');
  var submitBtn = overlay.querySelector('.ct-submit');
  var viewForm = overlay.querySelector('[data-ct-view="form"]');
  var viewDone = overlay.querySelector('[data-ct-view="done"]');
  var lastFocus = null;

  function setStatus(msg, tone) {
    statusEl.textContent = msg || '';
    if (tone) statusEl.setAttribute('data-tone', tone); else statusEl.removeAttribute('data-tone');
  }
  function open() {
    lastFocus = document.activeElement;
    viewForm.hidden = false; viewDone.hidden = true; setStatus('');
    overlay.setAttribute('data-open', '1');
    document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { form.elements.name.focus(); }, 60);
  }
  function close() {
    overlay.removeAttribute('data-open');
    document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* 事件委派：網站由模板引擎重繪，用委派才不會在重繪後失效 */
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-contact-open]') : null;
    if (t) { e.preventDefault(); e.stopPropagation(); open(); return; }
    if (e.target === overlay || (e.target.closest && e.target.closest('[data-ct-close]'))) close();
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.getAttribute('data-open') === '1') close();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var data = {
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      topic: f.topic.value,
      message: f.message.value.trim(),
      website: f.website.value,           // honeypot，真人不會填
      page: location.href
    };
    if (!data.name || !data.email || !data.message) return setStatus('請填寫姓名、Email 與訊息。', 'err');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return setStatus('Email 格式看起來不太對。', 'err');
    if (ENDPOINT.indexOf('/exec') === -1 || ENDPOINT.indexOf('請貼上') !== -1) return setStatus('表單尚未設定 ENDPOINT。', 'err');

    submitBtn.disabled = true;
    setStatus('傳送中…');

    /* 避開 CORS：Content-Type 用 text/plain，屬於「簡單請求」不會觸發 preflight；
       Apps Script 回應會 302 轉址到 googleusercontent.com，該網域有允許跨來源讀取。 */
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      redirect: 'follow'
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res || !res.ok) throw new Error((res && res.error) || 'unknown');
        form.reset();
        viewForm.hidden = true; viewDone.hidden = false;
      })
      .catch(function () {
        setStatus('送出失敗，請稍後再試，或直接寄信到 a880201@gmail.com。', 'err');
      })
      .then(function () { submitBtn.disabled = false; });
  });
})();
