var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  const TAG_NAME = "nagorneva-reviews-map";
  const DEFAULT_CENTER = [52, 57.3];
  const YANDEX_READY_TIMEOUT_MS = 2e4;
  const YANDEX_SCRIPT_TIMEOUT_MS = 2e4;
  const MARKER_SOURCE_ID = "nagorneva-reviews-markers";
  const CLUSTERER_PACKAGE = "@yandex/ymaps3-clusterer";
  const CLUSTERER_PACKAGE_WITH_VERSION = "@yandex/ymaps3-clusterer@0.0.12";
  const DEFAULT_UI_PACKAGE = "@yandex/ymaps3-default-ui-theme";
  const DEFAULT_UI_PACKAGE_WITH_VERSION = "@yandex/ymaps3-default-ui-theme@0.0.24";
  const YANDEX_PACKAGES_CDN = "https://cdn.jsdelivr.net/npm/{package}";
  const MARKER_PIN_SVG = `<svg class="nrw-marker-pin" width="62" height="69" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M30.5241 0C38.6197 0 46.3836 3.21879 52.108 8.94828C57.8324 14.6778 61.0483 22.4486 61.0483 30.5513C61.0483 40.9863 55.364 49.5271 49.3745 55.6543C46.382 58.6825 43.1168 61.4279 39.6203 63.8557L38.1755 64.8401L37.4972 65.2916L36.2186 66.1063L35.079 66.8022L33.6681 67.6237C32.7105 68.1708 31.6268 68.4585 30.5241 68.4585C29.4215 68.4585 28.3378 68.1708 27.3802 67.6237L25.9693 66.8022L24.2056 65.7159L23.5545 65.2916L22.1639 64.3649C18.3919 61.8105 14.8785 58.8931 11.6738 55.6543C5.68427 49.5237 0 40.9863 0 30.5513C0 22.4486 3.21593 14.6778 8.94031 8.94828C14.6647 3.21879 22.4286 0 30.5241 0ZM30.5241 20.3676C29.188 20.3676 27.8649 20.631 26.6304 21.1427C25.396 21.6545 24.2743 22.4047 23.3295 23.3503C22.3847 24.296 21.6353 25.4186 21.1239 26.6542C20.6126 27.8897 20.3494 29.214 20.3494 30.5513C20.3494 31.8887 20.6126 33.2129 21.1239 34.4485C21.6353 35.684 22.3847 36.8067 23.3295 37.7523C24.2743 38.698 25.396 39.4481 26.6304 39.9599C27.8649 40.4717 29.188 40.7351 30.5241 40.7351C33.2226 40.7351 35.8106 39.6622 37.7188 37.7523C39.6269 35.8425 40.6989 33.2522 40.6989 30.5513C40.6989 27.8504 39.6269 25.2601 37.7188 23.3503C35.8106 21.4405 33.2226 20.3676 30.5241 20.3676Z" fill="white"/>
  <path d="M30.5241 20.3676C29.188 20.3676 27.8649 20.631 26.6304 21.1427C25.396 21.6545 24.2743 22.4047 23.3295 23.3503C22.3847 24.296 21.6353 25.4186 21.1239 26.6542C20.6126 27.8897 20.3494 29.214 20.3494 30.5513C20.3494 31.8887 20.6126 33.2129 21.1239 34.4485C21.6353 35.684 22.3847 36.8067 23.3295 37.7523C24.2743 38.698 25.396 39.4481 26.6304 39.9599C27.8649 40.4717 29.188 40.7351 30.5241 40.7351C33.2226 40.7351 35.8106 39.6622 37.7188 37.7523C39.6269 35.8425 40.6989 33.2522 40.6989 30.5513C40.6989 27.8504 39.6269 25.2601 37.7188 23.3503C35.8106 21.4405 33.2226 20.3676 30.5241 20.3676Z" fill="white"/>
</svg>`;
  const RATING_STAR_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M16.55 23.8375L22.85 27.8375C23.6625 28.35 24.6625 27.5875 24.425 26.65L22.6 19.475C22.5506 19.2761 22.5585 19.0673 22.6226 18.8727C22.6868 18.6781 22.8046 18.5055 22.9625 18.375L28.6125 13.6625C29.35 13.05 28.975 11.8125 28.0125 11.75L20.6375 11.275C20.4363 11.2633 20.2428 11.1932 20.0808 11.0733C19.9187 10.9534 19.7951 10.789 19.725 10.6L16.975 3.67497C16.9022 3.47485 16.7696 3.30197 16.5952 3.17981C16.4207 3.05765 16.2129 2.99213 16 2.99213C15.787 2.99213 15.5793 3.05765 15.4048 3.17981C15.2304 3.30197 15.0978 3.47485 15.025 3.67497L12.275 10.6C12.2049 10.789 12.0813 10.9534 11.9192 11.0733C11.7572 11.1932 11.5637 11.2633 11.3625 11.275L3.98749 11.75C3.02499 11.8125 2.64999 13.05 3.38749 13.6625L9.0375 18.375C9.19541 18.5055 9.31323 18.6781 9.37736 18.8727C9.4415 19.0673 9.44934 19.2761 9.39999 19.475L7.71249 26.125C7.42499 27.25 8.62499 28.1625 9.58749 27.55L15.45 23.8375C15.6144 23.7329 15.8052 23.6774 16 23.6774C16.1948 23.6774 16.3856 23.7329 16.55 23.8375Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  let widgetInstanceCounter = 0;
  let widgetRuntimeConfig = {};
  function debugInfo(_message, _details) {
  }
  function debugWarn(message, details) {
    if (details === void 0) console.warn(`[NRW] ${message}`);
    else console.warn(`[NRW] ${message}`, details);
  }
  function debugError(message, error) {
    if (error instanceof Error) {
      console.error(`[NRW] ${message}`, {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: error.cause
      }, error);
      return;
    }
    console.error(`[NRW] ${message}`, error);
  }
  function maskedKey(apiKey) {
    if (!apiKey) return "(пустой)";
    if (apiKey.length < 9) return "***";
    return `${apiKey.slice(0, 4)}…${apiKey.slice(-4)}`;
  }
  const styles = String.raw`
  nagorneva-reviews-map { display: block; width: 100%; color: #fff; font-family: Inter, Arial, sans-serif; }
  nagorneva-reviews-map .nrw-shell,
  nagorneva-reviews-map .nrw-shell * { box-sizing: border-box; }
  nagorneva-reviews-map .nrw-shell button { font: inherit; }
  .nrw-shell { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); width: 100%; height: 100vh; height: 100dvh; overflow-anchor: none; background: #9daec0; }
  .nrw-map-wrap { position: relative; min-width: 0; min-height: 0; height: 100%; overflow: hidden; background: #dfe4e9; }
  .nrw-map { position: absolute; inset: 0; }
  .nrw-map .ymaps3--marker { pointer-events: none; }
  .nrw-map-loader { position: absolute; z-index: 2; left: 50%; top: 50%; transform: translate(-50%, -50%); pointer-events: none; }
  .nrw-map-loader[hidden] { display: none; }
  .nrw-loader-spinner { display: block; width: 24px; height: 24px; padding: 3px; aspect-ratio: 1; border-radius: 50%; background: #000; --nrw-loader-mask: conic-gradient(#0000 20%, #000), linear-gradient(#000 0 0) content-box; -webkit-mask: var(--nrw-loader-mask); mask: var(--nrw-loader-mask); -webkit-mask-composite: source-out; mask-composite: subtract; animation: nrw-loader-spin 1s infinite linear; }
  @keyframes nrw-loader-spin { to { transform: rotate(1turn); } }
  .nrw-map-placeholder { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; color: #6b7885; text-align: center; background: radial-gradient(circle at 65% 32%, rgba(130,192,140,.62) 0 6%, transparent 7%), linear-gradient(135deg, #b7def1 0 22%, #cfe5c7 22% 67%, #e9dfc8 67%); }
  .nrw-map-placeholder[hidden] { display: none; }
  .nrw-map-placeholder::after { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(25deg, transparent 0 46px, rgba(255,255,255,.27) 47px 49px); }
  .nrw-map-placeholder span { position: relative; z-index: 1; max-width: 340px; padding: 14px 18px; border-radius: 12px; background: rgba(255,255,255,.86); }
  .nrw-panel { display: flex; min-width: 0; min-height: 0; height: 100%; padding: 29px 40px 40px; overflow: hidden; flex-direction: column; }
  .nrw-title { margin: 0 0 23px; font-size: 32px; line-height: 1.2; font-weight: 600; }
  .nrw-title-mini { display: none; }
  .nrw-description { max-width: 831px; margin: 0; font-size: 18px; line-height: 1.3; }
  .nrw-description p { margin: 0 0 14px; }
  .nrw-description p:last-child { margin-bottom: 0; }
  .nrw-description-accent { font-weight: 600; }
  .nrw-nowrap { white-space: nowrap; }
  .nrw-description-mini { display: none; }
  .nrw-panel.has-selection .nrw-title-full,
  .nrw-panel.has-selection .nrw-description-full { display: none; }
  .nrw-panel.has-selection .nrw-title-mini,
  .nrw-panel.has-selection .nrw-description-mini { display: block; }
  .nrw-review-area { position: relative; min-height: 0; margin-top: 32px; padding: 15px; overflow: hidden; border-radius: 15px; background: #dfe4e9; flex: 1 1 auto; }
  .nrw-review-area[hidden] { display: none; }
  .nrw-review-area.has-review-list { display: flex; flex-direction: column; gap: 12px; }
  .nrw-city { display: block; width: max-content; min-width: 0; max-width: 100%; margin: 0; padding: 9px 15px; overflow: hidden; border: 1px solid rgba(157,174,192,.45); border-radius: 999px; color: #53697d; background: #cbd6df; box-shadow: 0 5px 12px rgba(91,110,128,.16); font-size: 14px; line-height: 1.3; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; flex: 0 0 auto; }
  .nrw-review-scroll { width: 100%; min-width: 0; min-height: 0; overflow: hidden; border-radius: 15px; flex: 1 1 auto; }
  .nrw-review-list { display: flex; width: 100%; min-width: 0; height: 100%; min-height: 0; gap: 12px; padding-right: 4px; overflow-x: hidden; overflow-y: auto; flex-direction: column; }
  .nrw-review-list::-webkit-scrollbar { width: 5px; }
  .nrw-review-list::-webkit-scrollbar-track { box-sizing: border-box; margin: 10px 0; border-radius: 50% / 3px; background: rgba(157,174,192,.22); }
  .nrw-review-list::-webkit-scrollbar-thumb { border-radius: 50% / 3px; background-color: #9daec0; }
  @supports not selector(::-webkit-scrollbar) {
    .nrw-review-list { scrollbar-color: #9daec0 rgba(157,174,192,.22); scrollbar-width: thin; }
  }
  .nrw-card { width: 100%; min-width: 0; max-width: 100%; height: fit-content; min-height: 0; padding: 14px 16px; border: 1px solid rgba(181,195,208,.5); border-radius: 15px; color: #111; background: #fff; flex-shrink: 0; }
  .nrw-card.is-collapsible { cursor: pointer; }
  .nrw-card.is-collapsible:focus-visible { outline: 3px solid rgba(83,105,125,.75); outline-offset: 2px; }
  .nrw-card.is-without-review, .nrw-card.is-with-review { width: 100%; height: fit-content; min-height: 0; max-width: 100%; padding: 16px 18px; align-self: stretch; border: 0; background: rgba(255,255,255,.72); }
  .nrw-card.is-with-review .nrw-card-footer { margin-bottom: 12px; }
  .nrw-card.is-with-review .nrw-comment-wrap::after { background: linear-gradient(90deg, transparent, #f6f7f9 45%); }
  .nrw-card.is-without-review .nrw-comment { margin-bottom: 0; }
  .nrw-completed-doctor { margin: 0 0 12px; overflow-wrap: anywhere; color: #111; font-size: 16px; line-height: 1.3; font-weight: 600; }
  .nrw-completed-title { margin: 0 0 8px; color: rgba(0,0,0,.5); font-size: 14px; line-height: 1.3; }
  .nrw-completed-courses { display: flex; margin: 0; padding: 0; gap: 8px; list-style: none; flex-direction: column; }
  .nrw-completed-course { display: flex; min-width: 0; padding: 9px 12px; border-radius: 10px; align-items: center; gap: 10px; background: rgba(223,228,233,.58); }
  .nrw-completed-course-name { display: block; min-width: 0; color: #53697d; font-size: 14px; line-height: 1.3; overflow-wrap: anywhere; flex: 1 1 auto; }
  a.nrw-completed-course-name { text-decoration: underline; text-decoration-color: rgba(83,105,125,.45); text-underline-offset: 2px; transition: color .18s ease; }
  a.nrw-completed-course-name:hover { color: #344d63; }
  a.nrw-completed-course-name:focus-visible { outline: 3px solid rgba(83,105,125,.6); outline-offset: 2px; }
  .nrw-completed-course .nrw-rating { flex: 0 0 auto; }
  .nrw-card > * { min-width: 0; max-width: 100%; }
  .nrw-review-entry + .nrw-review-entry { margin-top: 18px; padding-top: 18px; border-top: 1px solid rgba(157,174,192,.3); }
  .nrw-review-entry.is-collapsible { cursor: pointer; }
  .nrw-review-entry.is-collapsed .nrw-comment-wrap { max-height: 1.3em; margin-bottom: 8px; }
  .nrw-review-entry.is-collapsed .nrw-comment-wrap::after { opacity: 1; }
  .nrw-card-head { display: flex; width: 100%; min-width: 0; max-width: 100%; margin-bottom: 10px; align-items: center; justify-content: space-between; gap: 12px; }
  .nrw-course { display: block; width: max-content; min-width: 0; max-width: 100%; margin: 0; padding: 10px 15px; overflow: hidden; border-radius: 999px; background: rgba(223,228,233,.4); color: rgba(0,0,0,.7); font-size: 14px; line-height: 1.3; text-overflow: ellipsis; white-space: nowrap; flex: 0 1 auto; }
  .nrw-course a { color: inherit; }
  .nrw-rating { display: flex; flex: 0 0 auto; align-items: center; gap: 2px; }
  .nrw-rating-star { display: block; width: 16px; height: 16px; color: rgba(157,174,192,.35); }
  .nrw-rating-star.is-filled { color: #9daec0; }
  .nrw-rating-star svg { display: block; width: 100%; height: 100%; }
  .nrw-rating-star path { fill: transparent; stroke: currentColor; }
  .nrw-rating-star.is-filled path { fill: currentColor; }
  .nrw-comment-wrap { position: relative; min-height: 0; margin-bottom: 12px; overflow: hidden; font-size: 16px; line-height: 1.3; transition: max-height .5s cubic-bezier(.22, 1, .36, 1), margin-bottom .5s cubic-bezier(.22, 1, .36, 1); }
  .nrw-comment-wrap::after { content: '…'; position: absolute; right: 0; bottom: 0; padding-left: 24px; opacity: 0; color: #111; background: linear-gradient(90deg, rgba(255,255,255,0), #fff 45%); pointer-events: none; transition: opacity .18s ease; }
  .nrw-card.is-collapsed .nrw-comment-wrap { max-height: 1.3em; margin-bottom: 8px; }
  .nrw-card.is-collapsed .nrw-comment-wrap::after { opacity: 1; }
  .nrw-comment { margin: 0; overflow-wrap: anywhere; font-size: inherit; line-height: inherit; white-space: pre-line; }
  .nrw-comment.is-empty { color: rgba(0,0,0,.5); font-style: italic; }
  .nrw-card-footer { display: flex; min-width: 0; align-items: flex-end; justify-content: space-between; gap: 12px; }
  .nrw-author { min-width: 0; margin: 0; overflow-wrap: anywhere; color: rgba(0,0,0,.5); font-size: 16px; line-height: 1.3; }
  .nrw-review-action { padding: 0; border: 0; color: #6d8295; background: transparent; font-size: 13px; line-height: 1.3; font-weight: 500; white-space: nowrap; cursor: pointer; flex: 0 0 auto; }
  .nrw-status { display: flex; align-items: center; justify-content: center; min-height: 280px; padding: 30px; border-radius: 15px; color: #65717d; text-align: center; background: #fff; }
  .nrw-retry { margin-left: 10px; padding: 8px 13px; border: 0; border-radius: 999px; color: #fff; background: #9daec0; cursor: pointer; }
  .nrw-marker { position: relative; width: 62px; height: 69px; padding: 0; border: 0; background: transparent; cursor: pointer; pointer-events: auto; transform: translate(-50%, -100%); filter: drop-shadow(0 3px 4px rgba(70,85,100,.28)); }
  .nrw-marker-pin { display: block; }
  .nrw-marker-core { position: absolute; z-index: 1; left: 9.5px; top: 9.5px; display: grid; width: 42px; height: 42px; place-items: center; border-radius: 50%; color: #fff; background: #a8b7c6; font-size: 20px; line-height: 1; font-weight: 700; transition: background-color .18s ease, transform .18s ease; }
  .nrw-marker.is-active .nrw-marker-core { background: #91a5b8; transform: scale(1.06); }
  .nrw-marker.is-empty .nrw-marker-core { color: #7f93a5; background: #dfe4e9; }
  .nrw-marker.is-empty.is-active .nrw-marker-core { color: #6f8496; background: #ced8e1; }
  .nrw-marker:focus-visible { outline: 3px solid #1b66a9; outline-offset: 3px; }
  .nrw-cluster { display: grid; width: 54px; height: 54px; padding: 0; place-items: center; border: 6px solid #fff; border-radius: 50%; color: #fff; background: #9eafc0; box-shadow: 0 3px 8px rgba(70,85,100,.28); font-size: 18px; line-height: 1; font-weight: 700; cursor: pointer; pointer-events: auto; transform: translate(-50%, -50%); transition: transform .18s ease, background-color .18s ease; }
  .nrw-cluster:hover { background: #91a5b8; transform: translate(-50%, -50%) scale(1.06); }
  .nrw-cluster:focus-visible { outline: 3px solid #1b66a9; outline-offset: 3px; }
  @media (min-width: 768px) and (max-height: 900px) {
    .nrw-panel { padding: 24px 32px 28px; }
    .nrw-title { margin-bottom: 14px; }
    .nrw-description p { margin-bottom: 9px; }
    .nrw-review-area { margin-top: 20px; }
  }
  @media (min-width: 768px) and (max-height: 700px) {
    .nrw-panel { padding: 18px 26px 22px; overflow-y: auto; }
    .nrw-title { margin-bottom: 10px; }
    .nrw-description p { margin-bottom: 6px; }
    .nrw-review-area { min-height: 220px; margin-top: 12px; flex: 1 1 auto; }
  }
  @media (min-width: 768px) and (max-height: 550px) {
    .nrw-description { font-size: 16px; }
  }
  @media (max-width: 767px) {
    .nrw-shell { display: flex; height: auto; min-height: 0; flex-direction: column; }
    .nrw-map-wrap { order: 3; height: 400px; min-height: 400px; }
    .nrw-panel { display: contents; }
    .nrw-panel.has-selection .nrw-title-full,
    .nrw-panel.has-selection .nrw-description-full { display: block; }
    .nrw-panel.has-selection .nrw-title-mini,
    .nrw-panel.has-selection .nrw-description-mini { display: none; }
    .nrw-title { order: 1; margin: 26px 20px 18px; font-size: 22px; white-space: normal; }
    .nrw-description { order: 2; max-width: none; margin: 0 0 21px; padding: 0 20px; font-size: 16px; }
    .nrw-review-area { order: 4; width: 100%; min-height: 412px; margin: 0 0 17px; padding: 15px; }
    .nrw-review-area.has-review-list { height: 412px; }
    .nrw-review-list { height: 100%; max-height: none; margin: 0; padding-right: 4px; overflow-x: hidden; overflow-y: auto; }
    .nrw-city { padding: 8px 13px; font-size: 12px; }
    .nrw-card { min-height: 0; padding: 14px 15px; }
    .nrw-course { margin-bottom: 17px; font-size: 12px; }
    .nrw-card-head { margin-bottom: 17px; align-items: flex-start; flex-direction: column; gap: 10px; }
    .nrw-card-head .nrw-course { margin-bottom: 0; }
    .nrw-rating-star { width: 14px; height: 14px; }
    .nrw-completed-doctor { font-size: 14px; }
    .nrw-completed-title, .nrw-completed-course-name { font-size: 12px; }
    .nrw-comment-wrap, .nrw-card.is-without-review .nrw-comment, .nrw-author { font-size: 14px; }
    .nrw-review-action { font-size: 10px; }
    .nrw-status { min-height: 380px; }
    .nrw-marker { transform: translate(-50%, -100%) scale(.83); }
  }
  @media (max-width: 389px) {
    .nrw-title { font-size: 20px; white-space: normal; }
  }
`;
  function numberAttribute(element, name, fallback) {
    const raw = element.getAttribute(name);
    if (raw === null || raw.trim() === "") return fallback;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  function reviewDisplayText(review) {
    const text = review.comment.trim();
    const normalize = (value) => value.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").replace(/[—–]/g, "-").replace(/\s+/g, " ").trim();
    const courseName = normalize(review.courseName);
    if (!courseName) return text;
    // Imported comments can begin with a course heading. Remove only recognized
    // headings; a colon in the review itself must not discard the author's words.
    const aliases = [
      [/контрастная.*гистеросальпингография/, ["КУЗ ГСС"]],
      [/тазового дна/, ["УЗД тазового дна"]],
      [/рубца на матке/, ["УЗ оценка рубца на матке"]],
      [/диагностика во 2 и 3 триместре/, ["2-3 скрининг", "2-3 триместр", "2-3 трим"]],
      [/^допплерометрия в акушерстве/, ["Допплер", "Допплерометрия", "Допплеромертия"]],
      [/^1 скрининг/, ["1 скрининг"]],
      [/^фетометрия \+ допплерометрия/, ["Фето и допплер"]],
      [/^эхокардиография:.*продвинутый/, ["ЭХО КГ продвин", "ЭХО КГ продвинутый"]],
      [/^беременность раннего срока/, ["Берем раннего срока"]],
      [/^скрининг сердца плода во 2 и 3/, ["ЭХО КГ 2-3 триместр", "ЭХОКГ 2-3 триместр", "ЭХО КГ 2-3 трим"]],
      [/диагностика в гинекологии/, ["УЗД в гинекологии"]],
      [/диагностика молочных желез/, ["УЗД м.Ж."]]
    ];
    const headings = [courseName, ...aliases.filter(([pattern]) => pattern.test(courseName)).flatMap(([, names]) => names.map(normalize))];
    for (let index = 0; index < text.length; index += 1) {
      if (text[index] !== ":" && text[index] !== "\n") continue;
      const heading = normalize(text.slice(0, index)).replace(/^(?:название курса|курс)\s*:\s*/, "");
      if (headings.includes(heading)) return text.slice(index + 1).replace(/^\s*:\s*/, "").trimStart();
    }
    return text;
  }
  function normalizeDoctor(raw) {
    const lat = Number(raw.lat);
    const lon = Number(raw.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
    const reviews = Array.isArray(raw.reviews) ? raw.reviews.map((item) => {
      const value = item;
      return {
        id: Number(value.id) || 0,
        rating: Number(value.rating) || 0,
        comment: String(value.comment || ""),
        courseId: Number(value.courseId ?? value.course_id) || void 0,
        courseName: String(value.courseName ?? value.course_name ?? ""),
        courseSiteLink: String(value.courseSiteLink ?? value.course_site_link ?? ""),
        createdAt: String(value.createdAt ?? value.created_at ?? "")
      };
    }).filter((review) => review.comment.trim() || review.rating >= 1 && review.rating <= 5) : [];
    const courses = Array.isArray(raw.courses) ? raw.courses.map((item) => {
      const value = item;
      return {
        id: Number(value.id) || 0,
        name: String(value.name || ""),
        siteLink: String(value.siteLink ?? value.site_link ?? "")
      };
    }).filter((course) => course.id > 0 || course.name.trim()) : [];
    return {
      id: Number(raw.id) || 0,
      name: String(raw.name || ""),
      photo: raw.photo ? String(raw.photo) : void 0,
      city: String(raw.city || ""),
      lat,
      lon,
      reviews,
      courses
    };
  }
  let demoDoctorsCache;
  function getDemoDoctors() {
    if (demoDoctorsCache) return demoDoctorsCache;
    const doctors = (widgetRuntimeConfig.demoDoctors ?? []).map(normalizeDoctor).filter((doctor) => Boolean(doctor));
    demoDoctorsCache = doctors;
    return doctors;
  }
  function createRatingElement(rawRating, showEmpty = false) {
    const rating = Math.round(rawRating);
    if ((rating < 1 || rating > 5) && !showEmpty) return null;
    const normalizedRating = rating >= 1 && rating <= 5 ? rating : 0;
    const element = document.createElement("div");
    element.className = "nrw-rating";
    element.setAttribute("role", "img");
    const label = normalizedRating > 0 ? `Оценка: ${normalizedRating} из 5` : "Оценка не поставлена";
    element.setAttribute("aria-label", label);
    element.title = label;
    for (let value = 1; value <= 5; value += 1) {
      const star = document.createElement("span");
      star.className = `nrw-rating-star${value <= normalizedRating ? " is-filled" : ""}`;
      star.innerHTML = RATING_STAR_SVG;
      element.append(star);
    }
    return element;
  }
  function setReviewCardExpanded(card, expanded) {
    const comment = card.querySelector(".nrw-comment");
    const commentWrap = card.querySelector(".nrw-comment-wrap");
    if (!comment || !commentWrap) return;
    const computedStyle = window.getComputedStyle(comment);
    const fontSize = Number.parseFloat(computedStyle.fontSize) || 16;
    const parsedLineHeight = Number.parseFloat(computedStyle.lineHeight);
    const collapsedHeight = Number.isFinite(parsedLineHeight) ? parsedLineHeight : fontSize * 1.3;
    const targetHeight = expanded ? comment.scrollHeight : collapsedHeight;
    card.classList.toggle("is-expanded", expanded);
    card.classList.toggle("is-collapsed", !expanded);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      commentWrap.style.transition = "none";
      commentWrap.style.maxHeight = `${targetHeight}px`;
      window.requestAnimationFrame(() => commentWrap.style.removeProperty("transition"));
    } else {
      commentWrap.style.maxHeight = `${targetHeight}px`;
    }
    const action = card.querySelector(".nrw-review-action");
    if (action) {
      action.setAttribute("aria-expanded", String(expanded));
      action.textContent = expanded ? "Свернуть ↑" : "Развернуть ↓";
    }
  }
  function groupDoctors(doctors) {
    const groups = /* @__PURE__ */ new Map();
    doctors.forEach((doctor) => {
      const key = markerGroupKey(doctor);
      const group = groups.get(key) ?? { lat: doctor.lat, lon: doctor.lon, doctors: [] };
      group.doctors.push(doctor);
      groups.set(key, group);
    });
    return [...groups.values()];
  }
  function markerGroupKey(group) {
    return `${group.lat.toFixed(4)}:${group.lon.toFixed(4)}`;
  }
  function groupReviewCount(group) {
    return group.doctors.reduce((sum, doctor) => sum + doctor.reviews.length, 0);
  }
  function doctorCardItems(doctor) {
    const items = doctor.reviews.map((review) => ({
      doctor,
      review,
      courses: []
    }));
    const reviewedCourseIds = new Set(doctor.reviews.map((review) => review.courseId).filter((courseId) => Boolean(courseId)));
    const reviewedCourseNames = new Set(doctor.reviews.map((review) => review.courseName.trim().toLocaleLowerCase("ru-RU")).filter(Boolean));
    const coursesWithoutReviews = doctor.courses.filter((course) => {
      const hasReview = course.id > 0 && reviewedCourseIds.has(course.id) || reviewedCourseNames.has(course.name.trim().toLocaleLowerCase("ru-RU"));
      return !hasReview;
    });
    if (coursesWithoutReviews.length > 0) items.push({ doctor, review: null, courses: coursesWithoutReviews });
    if (items.length === 0) items.push({ doctor, review: null, courses: [] });
    return items;
  }
  function groupCardCount(group) {
    return group.doctors.length;
  }
  function groupsToFeatures(groups) {
    return groups.map((group, index) => ({
      type: "Feature",
      id: `${group.lon.toFixed(5)}:${group.lat.toFixed(5)}:${index}`,
      geometry: { type: "Point", coordinates: [group.lon, group.lat] },
      properties: { group }
    }));
  }
  function distanceKm(from, to) {
    const radians = (degrees) => degrees * Math.PI / 180;
    const [fromLon, fromLat] = from;
    const [toLon, toLat] = to;
    const latDelta = radians(toLat - fromLat);
    const lonDelta = radians(toLon - fromLon);
    const a = Math.sin(latDelta / 2) ** 2 + Math.cos(radians(fromLat)) * Math.cos(radians(toLat)) * Math.sin(lonDelta / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function viewportRequest(bounds) {
    if (!bounds) {
      return { center: DEFAULT_CENTER, radiusKm: 0, key: "default" };
    }
    const [[firstLon, firstLat], [secondLon, secondLat]] = bounds;
    const center = [(firstLon + secondLon) / 2, (firstLat + secondLat) / 2];
    const radiusKm = Math.max(distanceKm(center, bounds[0]), distanceKm(center, bounds[1])) * 1.08;
    const key = [firstLon, firstLat, secondLon, secondLat].map((value) => value.toFixed(3)).join(":");
    return { center, radiusKm, key };
  }
  function nextClusterZoom(currentZoom) {
    return Math.min(currentZoom + (currentZoom < 7 ? 2 : 1), 20);
  }
  function nextAnimationFrame() {
    return new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
  }
  function registerYandexPackages(ymaps) {
    if (window.__nagornevaYmapsPackagesRegistered) return;
    if (typeof ymaps.import.registerCdn !== "function") {
      throw new Error("В Yandex Maps SDK отсутствует import.registerCdn");
    }
    ymaps.import.registerCdn(YANDEX_PACKAGES_CDN, [
      CLUSTERER_PACKAGE_WITH_VERSION,
      DEFAULT_UI_PACKAGE_WITH_VERSION
    ]);
    window.__nagornevaYmapsPackagesRegistered = true;
  }
  function waitForYandexMaps(ymaps) {
    var _a;
    debugInfo("Ожидаем ymaps3.ready", {
      readyType: typeof ymaps.ready,
      hasThen: typeof ((_a = ymaps.ready) == null ? void 0 : _a.then) === "function",
      ymaps3Keys: Object.keys(ymaps).sort()
    });
    return new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => {
        debugError("Таймаут ymaps3.ready");
        reject(new Error("Yandex Maps SDK не инициализировался за 20 секунд"));
      }, YANDEX_READY_TIMEOUT_MS);
      ymaps.ready.then(() => {
        window.clearTimeout(timeout);
        debugInfo("ymaps3.ready успешно завершён", {
          constructors: {
            YMap: typeof ymaps.YMap,
            YMapDefaultSchemeLayer: typeof ymaps.YMapDefaultSchemeLayer,
            YMapDefaultFeaturesLayer: typeof ymaps.YMapDefaultFeaturesLayer,
            YMapMarker: typeof ymaps.YMapMarker
          }
        });
        resolve(ymaps);
      }).catch((error) => {
        window.clearTimeout(timeout);
        const reason = error instanceof Error ? error.message : String(error);
        debugError("ymaps3.ready завершён с ошибкой", error);
        reject(new Error(`Yandex Maps SDK: ${reason}`));
      });
    });
  }
  function loadYandexMaps(apiKey) {
    debugInfo("Запрошена загрузка Yandex Maps SDK", {
      apiKey: maskedKey(apiKey)
    });
    if (window.ymaps3) {
      return waitForYandexMaps(window.ymaps3);
    }
    if (window.__nagornevaYmapsPromise) {
      return window.__nagornevaYmapsPromise;
    }
    const sdkUrl = `https://api-maps.yandex.ru/v3/?apikey=${encodeURIComponent(apiKey)}&lang=ru_RU`;
    const loadingPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      const scriptTimeout = window.setTimeout(() => {
        debugError("Таймаут загрузки тега script Yandex Maps");
        reject(new Error("Файл Yandex Maps SDK не загрузился за 20 секунд"));
      }, YANDEX_SCRIPT_TIMEOUT_MS);
      script.src = sdkUrl;
      script.async = true;
      script.dataset.nagornevaYandexMaps = "true";
      script.onload = (event) => {
        window.clearTimeout(scriptTimeout);
        debugInfo("Событие load у script Yandex Maps", {
          eventType: event.type
        });
        if (!window.ymaps3) {
          reject(new Error("Yandex Maps SDK загружен, но window.ymaps3 не создан"));
          return;
        }
        waitForYandexMaps(window.ymaps3).then(resolve, reject);
      };
      script.onerror = (event) => {
        window.clearTimeout(scriptTimeout);
        debugError("Событие error у script Yandex Maps", {
          eventType: event instanceof Event ? event.type : typeof event,
          url: sdkUrl.replace(/apikey=[^&]+/i, "apikey=***")
        });
        reject(new Error("Не удалось загрузить Yandex Maps SDK"));
      };
      document.head.append(script);
    });
    window.__nagornevaYmapsPromise = loadingPromise.catch((error) => {
      window.__nagornevaYmapsPromise = void 0;
      debugError("Общая загрузка Yandex Maps SDK завершилась с ошибкой", error);
      throw error;
    });
    return window.__nagornevaYmapsPromise;
  }
  class NagornevaReviewsMap extends HTMLElement {
    constructor() {
      super();
      __publicField(this, "debugId", ++widgetInstanceCounter);
      __publicField(this, "root");
      __publicField(this, "doctors", []);
      __publicField(this, "map");
      __publicField(this, "ymaps");
      __publicField(this, "clusterer");
      __publicField(this, "markerEntities", []);
      __publicField(this, "abort");
      __publicField(this, "fetchTimer");
      __publicField(this, "latestBounds");
      __publicField(this, "lastViewportKey", "");
      __publicField(this, "requestId", 0);
      __publicField(this, "isDemo", false);
      __publicField(this, "selectedGroup");
      __publicField(this, "selectedGroupKey", "");
      this.root = this;
      debugInfo(`Виджет #${this.debugId}: constructor`);
    }
    connectedCallback() {
      debugInfo(`Виджет #${this.debugId}: connectedCallback`, {
        attributes: Object.fromEntries([...this.attributes].map((attribute) => [
          attribute.name,
          attribute.name === "yandex-api-key" ? maskedKey(attribute.value) : attribute.value
        ])),
        isConnected: this.isConnected
      });
      this.renderShell();
      void this.load();
    }
    disconnectedCallback() {
      var _a, _b, _c;
      debugWarn(`Виджет #${this.debugId}: disconnectedCallback`);
      if (this.fetchTimer) window.clearTimeout(this.fetchTimer);
      (_a = this.abort) == null ? void 0 : _a.abort();
      (_c = (_b = this.map) == null ? void 0 : _b.destroy) == null ? void 0 : _c.call(_b);
    }
    renderShell() {
      this.root.innerHTML = `
      <style>${styles}</style>
      <section class="nrw-shell" aria-label="География наших учеников: реальные отзывы врачей">
        <div class="nrw-map-wrap">
          <div class="nrw-map" part="map"></div>
          <section class="nrw-map-loader" hidden role="status" aria-label="Загрузка данных карты">
            <span class="nrw-loader-spinner"></span>
          </section>
          <div class="nrw-map-placeholder"><span>Карта загружается…</span></div>
        </div>
        <div class="nrw-panel">
          <h2 class="nrw-title nrw-title-full">География наших учеников: реальные отзывы врачей</h2>
          <h2 class="nrw-title nrw-title-mini">Отзывы наших учеников</h2>
          <div class="nrw-description nrw-description-full">
            <p>Лучше всего о качестве обучения расскажет тот, кто прошел уже этот путь!</p>
            <p>Наши ученики работают в разных городах России и за ее пределами, но их объединяет стремление развиваться в профессии и совершенствовать свои навыки ультразвуковой диагностики.</p>
            <p>На интерактивной карте вы можете увидеть, где работают врачи, прошедшие обучение в нашей ШКОЛЕ, познакомиться с их отзывами и узнать, какие впечатления и результаты они получили от обучения.</p>
            <p class="nrw-description-accent">Выберите город или отметку на карте и узнайте, что говорят <span class="nrw-nowrap">о нас коллеги!</span></p>
            <p class="nrw-description-accent">И помните - нет границ для обучения! Наши ученики <span class="nrw-nowrap">по всему миру!♥️</span></p>
          </div>
          <div class="nrw-description nrw-description-mini">
            <p>Реальные отзывы врачей, прошедших обучение в нашей ШКОЛЕ.</p>
            <p class="nrw-description-accent">Выберите город или отметку на карте и узнайте, что говорят <span class="nrw-nowrap">о нас коллеги!</span></p>
            <p class="nrw-description-accent">И помните - нет границ для обучения! Наши ученики <span class="nrw-nowrap">по всему миру!♥️</span></p>
          </div>
          <div class="nrw-review-area" hidden aria-live="polite"></div>
        </div>
      </section>`;
      debugInfo(`Виджет #${this.debugId}: HTML и CSS добавлены в DOM`);
    }
    async load() {
      var _a, _b;
      this.isDemo = Boolean((_a = widgetRuntimeConfig.demoDoctors) == null ? void 0 : _a.length);
      debugInfo(`Виджет #${this.debugId}: начинаем load()`, {
        demo: this.isDemo,
        apiUrl: this.getAttribute("api-url") || "(не указан)"
      });
      this.hideReviewArea();
      try {
        this.doctors = [];
        await this.mountMap();
        await nextAnimationFrame();
        this.latestBounds = ((_b = this.map) == null ? void 0 : _b.bounds) ?? this.latestBounds;
        await this.refreshDoctorsForViewport(true);
        debugInfo(`Виджет #${this.debugId}: отзывы подготовлены`, {
          doctors: this.doctors.length,
          reviews: this.doctors.reduce((sum, doctor) => sum + doctor.reviews.length, 0)
        });
        debugInfo(`Виджет #${this.debugId}: load() завершён`);
        this.dispatchEvent(new CustomEvent("nagorneva-reviews-ready", { bubbles: true, detail: { doctors: this.doctors.length } }));
      } catch (error) {
        debugError(`Виджет #${this.debugId}: load() завершился с ошибкой`, error);
        this.showError(error instanceof Error ? error.message : "Не удалось загрузить отзывы");
      }
    }
    async fetchDoctors(center, radiusKm) {
      var _a;
      if (this.isDemo) {
        return getDemoDoctors().filter((doctor) => radiusKm <= 0 || distanceKm(center, [doctor.lon, doctor.lat]) <= radiusKm);
      }
      const apiUrl = (this.getAttribute("api-url") || "").replace(/\/$/, "");
      if (!apiUrl) throw new Error("Для виджета не указан api-url");
      (_a = this.abort) == null ? void 0 : _a.abort();
      this.abort = new AbortController();
      debugInfo(`Виджет #${this.debugId}: запрос докторов для viewport`);
      const response = await fetch(`${apiUrl}/api/v1/doctors_on_map`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lat: center[1],
          lon: center[0],
          radiusKm
        }),
        signal: this.abort.signal
      });
      if (!response.ok) throw new Error(`API вернул ошибку ${response.status}`);
      const payload = await response.json();
      return (payload.doctors ?? []).map(normalizeDoctor).filter((item) => Boolean(item));
    }
    scheduleViewportRefresh(bounds) {
      var _a;
      if (bounds) this.latestBounds = bounds;
      const delayMs = widgetRuntimeConfig.viewportFetchDelayMs ?? 0;
      if (!this.isDemo || delayMs <= 0) {
        void this.refreshDoctorsForViewport();
        return;
      }
      if (this.fetchTimer) window.clearTimeout(this.fetchTimer);
      (_a = this.abort) == null ? void 0 : _a.abort();
      this.requestId += 1;
      this.setMapLoading(true);
      this.fetchTimer = window.setTimeout(() => {
        this.fetchTimer = void 0;
        void this.refreshDoctorsForViewport();
      }, delayMs);
    }
    async refreshDoctorsForViewport(force = false) {
      var _a;
      const request = viewportRequest(this.latestBounds ?? ((_a = this.map) == null ? void 0 : _a.bounds));
      if (!force && request.key === this.lastViewportKey) {
        this.setMapLoading(false);
        return;
      }
      this.lastViewportKey = request.key;
      const requestId = ++this.requestId;
      this.setMapLoading(true);
      try {
        const doctors = await this.fetchDoctors(request.center, request.radiusKm);
        if (requestId !== this.requestId) return;
        this.doctors = doctors;
        this.updateMapFeatures();
        this.updateReviewAreaAfterDataLoad();
        debugInfo(`Виджет #${this.debugId}: данные viewport обновлены`, {
          key: request.key,
          doctors: doctors.length,
          reviews: doctors.reduce((sum, doctor) => sum + doctor.reviews.length, 0)
        });
        this.dispatchEvent(new CustomEvent("nagorneva-reviews-data", {
          bubbles: true,
          detail: { doctors: doctors.length, radiusKm: request.radiusKm }
        }));
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        debugError(`Виджет #${this.debugId}: не удалось обновить данные viewport`, error);
        if (this.selectedGroup) {
          debugWarn(`Виджет #${this.debugId}: выбранные отзывы сохранены после ошибки обновления viewport`);
        } else {
          this.showError(error instanceof Error ? error.message : "Не удалось загрузить отзывы");
        }
      } finally {
        if (requestId === this.requestId) this.setMapLoading(false);
      }
    }
    updateReviewAreaAfterDataLoad() {
      if (!this.selectedGroupKey) return;
      const refreshedGroup = groupDoctors(this.doctors).find((group) => markerGroupKey(group) === this.selectedGroupKey);
      if (refreshedGroup) this.selectedGroup = refreshedGroup;
      debugInfo(`Виджет #${this.debugId}: выбранные отзывы сохранены после обновления viewport`, {
        key: this.selectedGroupKey
      });
    }
    async mountMap() {
      const mapElement = this.root.querySelector(".nrw-map");
      const placeholder = this.root.querySelector(".nrw-map-placeholder");
      const apiKey = this.getAttribute("yandex-api-key") || "";
      const bounds = mapElement.getBoundingClientRect();
      debugInfo(`Виджет #${this.debugId}: начинаем mountMap()`, {
        apiKey: maskedKey(apiKey),
        mapSize: { width: bounds.width, height: bounds.height },
        mapConnected: mapElement.isConnected,
        mapDisplay: getComputedStyle(mapElement).display,
        groups: groupDoctors(this.doctors).length
      });
      if (!apiKey) {
        debugWarn(`Виджет #${this.debugId}: отсутствует yandex-api-key`);
        placeholder.querySelector("span").textContent = "Укажите yandex-api-key, чтобы отобразить интерактивную карту";
        throw new Error("Для виджета не указан yandex-api-key");
      }
      try {
        const ymaps = await loadYandexMaps(apiKey);
        this.ymaps = ymaps;
        const center = [numberAttribute(this, "center-lon", DEFAULT_CENTER[0]), numberAttribute(this, "center-lat", DEFAULT_CENTER[1])];
        debugInfo(`Виджет #${this.debugId}: создаём YMap`, {
          center,
          zoom: numberAttribute(this, "zoom", 4),
          elementSize: { width: mapElement.clientWidth, height: mapElement.clientHeight }
        });
        this.map = new ymaps.YMap(mapElement, {
          location: { center, zoom: numberAttribute(this, "zoom", 4) },
          behaviors: ["drag", "scrollZoom", "pinchZoom", "dblClick"]
        });
        debugInfo(`Виджет #${this.debugId}: YMap создан`);
        this.map.addChild(new ymaps.YMapDefaultSchemeLayer());
        debugInfo(`Виджет #${this.debugId}: YMapDefaultSchemeLayer добавлен`);
        this.map.addChild(new ymaps.YMapDefaultFeaturesLayer());
        debugInfo(`Виджет #${this.debugId}: YMapDefaultFeaturesLayer добавлен`);
        this.map.addChild(new ymaps.YMapFeatureDataSource({ id: MARKER_SOURCE_ID }));
        this.map.addChild(new ymaps.YMapLayer({ source: MARKER_SOURCE_ID, type: "markers", zIndex: 1800 }));
        this.map.addChild(new ymaps.YMapListener({
          onUpdate: ({ location }) => {
            if (location.bounds) this.latestBounds = location.bounds;
          },
          onActionEnd: ({ location }) => {
            this.scheduleViewportRefresh(location.bounds);
          }
        }));
        registerYandexPackages(ymaps);
        await this.setupZoomControls(ymaps);
        await this.setupClusterer(ymaps);
        this.latestBounds = this.map.bounds;
        this.updateMapFeatures();
        placeholder.hidden = true;
        debugInfo(`Виджет #${this.debugId}: карта готова, заглушка скрыта`);
      } catch (error) {
        debugError(`Виджет #${this.debugId}: mountMap() завершился с ошибкой`, error);
        placeholder.querySelector("span").textContent = error instanceof Error ? error.message : "Не удалось открыть карту";
        throw error;
      }
    }
    async setupClusterer(ymaps) {
      if (!this.map) return;
      try {
        const clustererModule = await ymaps.import(CLUSTERER_PACKAGE);
        this.clusterer = new clustererModule.YMapClusterer({
          method: clustererModule.clusterByGrid({ gridSize: 72 }),
          features: [],
          marker: (feature) => this.createMarkerEntity(feature),
          cluster: (coordinates, features) => this.createClusterEntity(coordinates, features)
        });
        this.map.addChild(this.clusterer);
        debugInfo(`Виджет #${this.debugId}: кластеризатор подключён`);
      } catch (error) {
        this.clusterer = void 0;
        debugWarn(`Виджет #${this.debugId}: кластеризатор недоступен, используем отдельные метки`, error);
      }
    }
    async setupZoomControls(ymaps) {
      if (!this.map) return;
      try {
        const defaultUiTheme = await ymaps.import(DEFAULT_UI_PACKAGE);
        const controls = new ymaps.YMapControls({ position: "right", orientation: "vertical" });
        controls.addChild(new defaultUiTheme.YMapZoomControl({ easing: "ease-in-out" }));
        this.map.addChild(controls);
        debugInfo(`Виджет #${this.debugId}: кнопки масштаба +/− добавлены`);
      } catch (error) {
        debugWarn(`Виджет #${this.debugId}: не удалось добавить кнопки масштаба`, error);
      }
    }
    updateMapFeatures() {
      var _a;
      if (!this.map || !this.ymaps) return;
      const features = groupsToFeatures(groupDoctors(this.doctors));
      if ((_a = this.clusterer) == null ? void 0 : _a.update) {
        this.clusterer.update({ features });
      } else {
        this.markerEntities.forEach((entity) => {
          var _a2;
          return (_a2 = this.map) == null ? void 0 : _a2.removeChild(entity);
        });
        this.markerEntities = features.map((feature) => this.createMarkerEntity(feature));
        this.markerEntities.forEach((entity) => {
          var _a2;
          return (_a2 = this.map) == null ? void 0 : _a2.addChild(entity);
        });
      }
      debugInfo(`Виджет #${this.debugId}: объекты карты обновлены`, { features: features.length });
    }
    createMarkerEntity(feature) {
      const group = feature.properties.group;
      const reviewCount = groupReviewCount(group);
      const cardCount = groupCardCount(group);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nrw-marker";
      if (reviewCount === 0) button.classList.add("is-empty");
      if (markerGroupKey(group) === this.selectedGroupKey) button.classList.add("is-active");
      button.innerHTML = `${MARKER_PIN_SVG}<span class="nrw-marker-core">${cardCount}</span>`;
      const cities = [...new Set(group.doctors.map((doctor) => doctor.city).filter(Boolean))].join(", ");
      button.setAttribute("aria-label", reviewCount > 0 ? `Открыть карточки: ${cardCount}, ${cities}` : `Специалисты без опубликованных отзывов: ${cardCount}, ${cities}`);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        this.selectGroup(group);
        this.root.querySelectorAll(".nrw-marker").forEach((marker) => marker.classList.remove("is-active"));
        button.classList.add("is-active");
      });
      return new this.ymaps.YMapMarker({
        coordinates: feature.geometry.coordinates,
        source: MARKER_SOURCE_ID,
        zIndex: 10
      }, button);
    }
    createClusterEntity(coordinates, features) {
      const count = features.reduce((sum, feature) => {
        const group = feature.properties.group;
        return sum + groupCardCount(group);
      }, 0);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nrw-cluster";
      button.textContent = String(count);
      button.setAttribute("aria-label", `Приблизить кластер: ${count} объектов`);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        this.zoomToCluster(coordinates);
      });
      return new this.ymaps.YMapMarker({ coordinates, source: MARKER_SOURCE_ID, zIndex: 20 }, button);
    }
    zoomToCluster(coordinates) {
      if (!this.map) return;
      const currentZoom = this.map.zoom ?? numberAttribute(this, "zoom", 4);
      const location = {
        center: coordinates,
        zoom: nextClusterZoom(currentZoom),
        duration: 250,
        easing: "ease-in-out"
      };
      this.map.update({ location });
      debugInfo(`Виджет #${this.debugId}: приближаем кластер`);
    }
    selectGroup(group) {
      const items = group.doctors.flatMap(doctorCardItems);
      const area = this.root.querySelector(".nrw-review-area");
      const panel = this.root.querySelector(".nrw-panel");
      this.selectedGroup = group;
      this.selectedGroupKey = markerGroupKey(group);
      panel.classList.add("has-selection");
      area.classList.add("has-review-list");
      if (!items.length) {
        this.showStatus("Нет данных о пройденных курсах");
        return;
      }
      area.hidden = false;
      area.innerHTML = "";
      const list = document.createElement("div");
      list.className = "nrw-review-list";
      list.setAttribute("role", "list");
      list.setAttribute("aria-label", `Карточки специалистов: ${group.doctors.length}`);
      const cities = [...new Set(group.doctors.map((doctor) => doctor.city.trim()).filter(Boolean))];
      if (cities.length) {
        const city = document.createElement("p");
        city.className = "nrw-city";
        city.textContent = cities.map((name) => `г. ${name}`).join(", ");
        area.append(city);
      }
      group.doctors.forEach((doctor) => {
        const doctorCard = document.createElement("article");
        doctorCard.className = `nrw-card ${doctor.reviews.length ? "is-with-review" : "is-without-review"}`;
        doctorCard.setAttribute("role", "listitem");
        const author = document.createElement("p");
        author.className = "nrw-completed-doctor";
        author.textContent = doctor.name;
        doctorCard.append(author);
        list.append(doctorCard);
        doctorCardItems(doctor).forEach(({ review, courses: completedCourses }) => {
        const card = document.createElement("div");
        card.className = "nrw-review-entry";
        const comment = document.createElement("p");
        comment.className = "nrw-comment";
        const authorText = doctor.name;
        let isCollapsible = false;
        if (review) {
          card.classList.add("is-with-review");
          const displayText = reviewDisplayText(review);
          if (displayText) {
            comment.textContent = displayText;
            isCollapsible = true;
          } else {
            comment.classList.add("is-empty");
            comment.textContent = "Текст отзыва не оставлен.";
          }
        } else if (completedCourses.length > 0) {
          card.classList.add("is-without-review");
          const title = document.createElement("p");
          title.className = "nrw-completed-title";
          title.textContent = doctor.reviews.length > 0 ? "Также пройденные курсы:" : "Пройденные курсы:";
          const courses = document.createElement("ul");
          courses.className = "nrw-completed-courses";
          completedCourses.forEach((completedCourse) => {
            const item = document.createElement("li");
            item.className = "nrw-completed-course";
            const courseName = completedCourse.name || "Курс не указан";
            if (completedCourse.siteLink) {
              const link = document.createElement("a");
              link.className = "nrw-completed-course-name";
              link.href = completedCourse.siteLink;
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.textContent = courseName;
              item.append(link);
            } else {
              const text = document.createElement("span");
              text.className = "nrw-completed-course-name";
              text.textContent = courseName;
              item.append(text);
            }
            item.append(createRatingElement(5));
            courses.append(item);
          });
          card.append(title, courses);
          doctorCard.append(card);
          return;
        } else {
          return;
        }
        const footer = document.createElement("div");
        footer.className = "nrw-card-footer";
        const rating = createRatingElement(review.rating);
        if (rating) footer.append(rating);
        const commentWrap = document.createElement("div");
        commentWrap.className = "nrw-comment-wrap";
        commentWrap.append(comment);
        if (isCollapsible) {
          card.classList.add("is-collapsible", "is-collapsed");
          const action = document.createElement("button");
          action.type = "button";
          action.className = "nrw-review-action";
          action.setAttribute("aria-expanded", "false");
          action.textContent = "Развернуть ↓";
          footer.append(action);
          const toggle = () => {
            const shouldExpand = !card.classList.contains("is-expanded");
            list.querySelectorAll(".nrw-review-entry.is-expanded").forEach((expandedCard) => {
              if (expandedCard !== card) setReviewCardExpanded(expandedCard, false);
            });
            setReviewCardExpanded(card, shouldExpand);
          };
          action.addEventListener("click", (event) => {
            event.stopPropagation();
            toggle();
          });
          card.addEventListener("click", (event) => {
            if (!card.classList.contains("is-collapsible")) return;
            if (event.target instanceof Element && event.target.closest("button, a")) return;
            const selection = window.getSelection();
            if (selection && !selection.isCollapsed) return;
            toggle();
          });
          window.requestAnimationFrame(() => {
            if (!card.isConnected) return;
            const collapsedHeight = commentWrap.clientHeight;
            if (comment.scrollHeight > collapsedHeight + 1) {
              commentWrap.style.maxHeight = `${collapsedHeight}px`;
              return;
            }
            card.classList.remove("is-collapsible", "is-collapsed");
            commentWrap.style.removeProperty("max-height");
            action.remove();
          });
        }
        card.append(commentWrap, footer);
        const courseTitle = document.createElement("p");
        courseTitle.className = "nrw-completed-title";
        courseTitle.textContent = "Пройденный курс:";
        const course = document.createElement("div");
        course.className = "nrw-completed-course";
        const courseName = document.createElement(review.courseSiteLink ? "a" : "span");
        courseName.className = "nrw-completed-course-name";
        courseName.textContent = review.courseName || "Курс не указан";
        if (review.courseSiteLink) {
          courseName.href = review.courseSiteLink;
          courseName.target = "_blank";
          courseName.rel = "noopener noreferrer";
        }
        course.append(courseName);
        card.append(courseTitle, course);
        doctorCard.append(card);
        });
      });
      const scroll = document.createElement("div");
      scroll.className = "nrw-review-scroll";
      scroll.append(list);
      area.append(scroll);
      list.scrollTop = 0;
      debugInfo(`Виджет #${this.debugId}: открыт список отзывов`, {
        cards: group.doctors.length,
        reviews: groupReviewCount(group),
        doctors: group.doctors.length
      });
    }
    showStatus(message) {
      const area = this.root.querySelector(".nrw-review-area");
      area.classList.remove("has-review-list");
      area.hidden = false;
      area.innerHTML = "";
      const status = document.createElement("div");
      status.className = "nrw-status";
      status.textContent = message;
      area.append(status);
    }
    hideReviewArea() {
      const area = this.root.querySelector(".nrw-review-area");
      const panel = this.root.querySelector(".nrw-panel");
      this.selectedGroup = void 0;
      this.selectedGroupKey = "";
      panel.classList.remove("has-selection");
      area.classList.remove("has-review-list");
      area.hidden = true;
      area.innerHTML = "";
    }
    setMapLoading(isLoading) {
      const loader = this.root.querySelector(".nrw-map-loader");
      if (loader) loader.hidden = !isLoading;
    }
    showError(message) {
      const area = this.root.querySelector(".nrw-review-area");
      const panel = this.root.querySelector(".nrw-panel");
      panel.classList.remove("has-selection");
      area.classList.remove("has-review-list");
      area.hidden = false;
      area.innerHTML = "";
      const status = document.createElement("div");
      status.className = "nrw-status";
      status.textContent = message;
      const retry = document.createElement("button");
      retry.type = "button";
      retry.className = "nrw-retry";
      retry.textContent = "Повторить";
      retry.addEventListener("click", () => {
        if (this.map) void this.refreshDoctorsForViewport(true);
        else void this.load();
      });
      status.append(retry);
      area.append(status);
    }
  }
  function registerNagornevaReviewsMap(config = {}) {
    widgetRuntimeConfig = config;
    demoDoctorsCache = void 0;
    if (!customElements.get(TAG_NAME)) {
      customElements.define(TAG_NAME, NagornevaReviewsMap);
    } else {
      debugWarn(`Custom Element <${TAG_NAME}> уже был зарегистрирован; повторная регистрация пропущена`);
    }
  }
  registerNagornevaReviewsMap();
})();
