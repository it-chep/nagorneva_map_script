var NagornevaReviewsWidget = (function(exports) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
  .nrw-shell { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); width: 100%; height: 651px; min-height: 651px; overflow-anchor: none; background: #9daec0; }
  .nrw-map-wrap { position: relative; min-width: 0; min-height: 651px; overflow: hidden; background: #dfe4e9; }
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
  .nrw-panel { display: flex; min-width: 0; min-height: 0; height: 651px; padding: 29px 40px 40px; overflow: hidden; flex-direction: column; }
  .nrw-title { margin: 0 0 23px; font-size: 32px; line-height: 1.2; font-weight: 600; }
  .nrw-description { max-width: 831px; margin: 0; font-size: 20px; line-height: 1.3; }
  .nrw-review-area { min-height: 0; margin-top: 72px; padding: 15px; overflow: hidden; border-radius: 15px; background: #dfe4e9; flex: 1 1 auto; }
  .nrw-review-area[hidden] { display: none; }
  .nrw-review-list { display: flex; width: 100%; min-width: 0; height: 100%; min-height: 0; gap: 12px; padding-right: 4px; overflow-x: hidden; overflow-y: auto; flex-direction: column; scrollbar-color: #9daec0 transparent; scrollbar-width: thin; }
  .nrw-review-list::-webkit-scrollbar { width: 6px; }
  .nrw-review-list::-webkit-scrollbar-track { background: transparent; }
  .nrw-review-list::-webkit-scrollbar-thumb { border-radius: 999px; background: #9daec0; }
  .nrw-card { width: 100%; min-width: 0; max-width: 100%; height: fit-content; min-height: 280px; padding: 19px 20px 16px; border: 1px solid rgba(181,195,208,.5); border-radius: 15px; color: #111; background: #fff; flex-shrink: 0; }
  .nrw-card.is-without-review { border-style: dashed; background: rgba(255,255,255,.72); }
  .nrw-card > * { min-width: 0; max-width: 100%; }
  .nrw-card-head { display: flex; width: 100%; min-width: 0; max-width: 100%; margin-bottom: 17px; align-items: center; justify-content: space-between; gap: 12px; }
  .nrw-course { display: block; width: max-content; min-width: 0; max-width: 100%; margin: 0; padding: 10px 15px; overflow: hidden; border-radius: 999px; background: rgba(223,228,233,.4); color: rgba(0,0,0,.7); font-size: 14px; line-height: 1.3; text-overflow: ellipsis; white-space: nowrap; flex: 0 1 auto; }
  .nrw-rating { display: flex; flex: 0 0 auto; align-items: center; gap: 2px; }
  .nrw-rating-star { display: block; width: 16px; height: 16px; color: rgba(157,174,192,.35); }
  .nrw-rating-star.is-filled { color: #9daec0; }
  .nrw-rating-star svg { display: block; width: 100%; height: 100%; }
  .nrw-rating-star path { fill: transparent; stroke: currentColor; }
  .nrw-rating-star.is-filled path { fill: currentColor; }
  .nrw-comment { margin: 0 0 12px; overflow-wrap: anywhere; font-size: 16px; line-height: 1.3; white-space: pre-line; }
  .nrw-comment.is-empty { color: rgba(0,0,0,.5); font-style: italic; }
  .nrw-author { margin: 0; overflow-wrap: anywhere; color: rgba(0,0,0,.5); font-size: 16px; line-height: 1.3; }
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
  @media (max-width: 767px) {
    .nrw-shell { display: block; height: auto; min-height: 0; }
    .nrw-map-wrap { min-height: 331px; }
    .nrw-panel { display: block; height: auto; min-height: 0; padding: 26px 20px 17px; overflow: visible; }
    .nrw-title { margin-bottom: 18px; font-size: 22px; white-space: nowrap; }
    .nrw-description { font-size: 15px; }
    .nrw-review-area { min-height: 381px; margin: 21px -20px 0; padding: 15px; }
    .nrw-review-list { height: auto; max-height: 351px; padding-right: 4px; overflow-x: hidden; overflow-y: auto; scrollbar-color: #9daec0 transparent; scrollbar-width: thin; }
    .nrw-card { min-height: 351px; padding: 19px; }
    .nrw-course { margin-bottom: 17px; font-size: 12px; }
    .nrw-card-head { margin-bottom: 17px; align-items: flex-start; flex-direction: column; gap: 10px; }
    .nrw-card-head .nrw-course { margin-bottom: 0; }
    .nrw-rating-star { width: 14px; height: 14px; }
    .nrw-comment, .nrw-author { font-size: 14px; }
    .nrw-status { min-height: 352px; }
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
        createdAt: String(value.createdAt ?? value.created_at ?? "")
      };
    }).filter((review) => review.comment.trim() || review.rating >= 1 && review.rating <= 5) : [];
    return {
      id: Number(raw.id) || 0,
      name: String(raw.name || ""),
      photo: raw.photo ? String(raw.photo) : void 0,
      city: String(raw.city || ""),
      lat,
      lon,
      reviews
    };
  }
  function createRatingElement(rawRating) {
    const rating = Math.round(rawRating);
    if (rating < 1 || rating > 5) return null;
    const element = document.createElement("div");
    element.className = "nrw-rating";
    element.setAttribute("role", "img");
    element.setAttribute("aria-label", `Оценка: ${rating} из 5`);
    element.title = `Оценка: ${rating} из 5`;
    for (let value = 1; value <= 5; value += 1) {
      const star = document.createElement("span");
      star.className = `nrw-rating-star${value <= rating ? " is-filled" : ""}`;
      star.innerHTML = RATING_STAR_SVG;
      element.append(star);
    }
    return element;
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
  function groupCardCount(group) {
    return group.doctors.reduce((sum, doctor) => sum + Math.max(doctor.reviews.length, 1), 0);
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
      __publicField(this, "latestBounds");
      __publicField(this, "lastViewportKey", "");
      __publicField(this, "requestId", 0);
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
      (_a = this.abort) == null ? void 0 : _a.abort();
      (_c = (_b = this.map) == null ? void 0 : _b.destroy) == null ? void 0 : _c.call(_b);
    }
    renderShell() {
      this.root.innerHTML = `
      <style>${styles}</style>
      <section class="nrw-shell" aria-label="Интерактивная карта с отзывами">
        <div class="nrw-map-wrap">
          <div class="nrw-map" part="map"></div>
          <section class="nrw-map-loader" hidden role="status" aria-label="Загрузка данных карты">
            <span class="nrw-loader-spinner"></span>
          </section>
          <div class="nrw-map-placeholder"><span>Карта загружается…</span></div>
        </div>
        <div class="nrw-panel">
          <h2 class="nrw-title">Интерактивная карта с отзывами</h2>
          <p class="nrw-description">Здесь можно выбрать специалиста на карте и прочитать отзыв о пройденном обучении. Наши ученики работают в разных городах — убедитесь сами.</p>
          <div class="nrw-review-area" hidden aria-live="polite"></div>
        </div>
      </section>`;
      debugInfo(`Виджет #${this.debugId}: HTML и CSS добавлены в DOM`);
    }
    async load() {
      var _a;
      debugInfo(`Виджет #${this.debugId}: начинаем load()`, {
        apiUrl: this.getAttribute("api-url") || "(не указан)"
      });
      this.hideReviewArea();
      try {
        this.doctors = [];
        await this.mountMap();
        await nextAnimationFrame();
        this.latestBounds = ((_a = this.map) == null ? void 0 : _a.bounds) ?? this.latestBounds;
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
            if (location.bounds) this.latestBounds = location.bounds;
            void this.refreshDoctorsForViewport();
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
      const items = group.doctors.flatMap((doctor) => doctor.reviews.length > 0 ? doctor.reviews.map((review) => ({ doctor, review })) : [{ doctor, review: null }]);
      const area = this.root.querySelector(".nrw-review-area");
      this.selectedGroup = group;
      this.selectedGroupKey = markerGroupKey(group);
      if (!items.length) {
        const cities = [...new Set(group.doctors.map((doctor) => doctor.city).filter(Boolean))];
        const names = group.doctors.map((doctor) => doctor.name).filter(Boolean);
        const place = cities.length === 1 ? `, город ${cities[0]}` : "";
        const message = names.length === 1 ? `${names[0]}${place} — пока нет опубликованных отзывов.` : `У специалистов${cities.length === 1 ? ` в городе ${cities[0]}` : ""} пока нет опубликованных отзывов.`;
        this.showStatus(message);
        return;
      }
      area.hidden = false;
      area.innerHTML = "";
      const list = document.createElement("div");
      list.className = "nrw-review-list";
      list.setAttribute("role", "list");
      list.setAttribute("aria-label", `Карточки специалистов и отзывов: ${items.length}`);
      items.forEach(({ doctor, review }) => {
        const card = document.createElement("article");
        card.className = "nrw-card";
        card.setAttribute("role", "listitem");
        const comment = document.createElement("p");
        comment.className = "nrw-comment";
        if (review) {
          const header = document.createElement("div");
          header.className = "nrw-card-head";
          const course = document.createElement("p");
          course.className = "nrw-course";
          course.textContent = `Курс: ${review.courseName || "не указан"}`;
          header.append(course);
          const rating = createRatingElement(review.rating);
          if (rating) header.append(rating);
          card.append(header);
          if (review.comment.trim()) {
            comment.textContent = review.comment;
          } else {
            comment.classList.add("is-empty");
            comment.textContent = "Текст отзыва не оставлен.";
          }
        } else {
          card.classList.add("is-without-review");
          comment.classList.add("is-empty");
          comment.textContent = "Пока нет опубликованных отзывов.";
        }
        const author = document.createElement("p");
        author.className = "nrw-author";
        author.textContent = [doctor.name, doctor.city ? `город ${doctor.city}` : ""].filter(Boolean).join(", ");
        card.append(comment, author);
        list.append(card);
      });
      area.append(list);
      list.scrollTop = 0;
      debugInfo(`Виджет #${this.debugId}: открыт список отзывов`, {
        cards: items.length,
        reviews: groupReviewCount(group),
        doctors: group.doctors.length
      });
    }
    showStatus(message) {
      const area = this.root.querySelector(".nrw-review-area");
      area.hidden = false;
      area.innerHTML = "";
      const status = document.createElement("div");
      status.className = "nrw-status";
      status.textContent = message;
      area.append(status);
    }
    hideReviewArea() {
      const area = this.root.querySelector(".nrw-review-area");
      this.selectedGroup = void 0;
      this.selectedGroupKey = "";
      area.hidden = true;
      area.innerHTML = "";
    }
    setMapLoading(isLoading) {
      const loader = this.root.querySelector(".nrw-map-loader");
      if (loader) loader.hidden = !isLoading;
    }
    showError(message) {
      const area = this.root.querySelector(".nrw-review-area");
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
  if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, NagornevaReviewsMap);
  } else {
    debugWarn(`Custom Element <${TAG_NAME}> уже был зарегистрирован; повторная регистрация пропущена`);
  }
  exports.NagornevaReviewsMap = NagornevaReviewsMap;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
})({});
