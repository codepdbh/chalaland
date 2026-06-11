"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LanguageOption = (typeof siteConfig.languages)[number];

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          element: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const STORAGE_KEY = "cecasem-language";
const TRANSLATE_COOKIE = "googtrans";
const TRANSLATE_CHROME_SELECTOR = [
  ".goog-te-banner-frame",
  ".goog-te-balloon-frame",
  ".goog-te-gadget",
  ".goog-te-menu-frame",
  ".goog-tooltip",
  "iframe.skiptranslate",
  "body > .skiptranslate",
  ".VIpgJd-ZVi9od-ORHb",
  ".VIpgJd-ZVi9od-ORHb-OEVmcd",
  ".VIpgJd-yAWNEb-L7lbkb",
].join(",");

function FlagIcon({ code }: { code: string }) {
  const baseClasses =
    "relative inline-block h-4 w-6 flex-shrink-0 overflow-hidden rounded-sm ring-1 ring-black/15";

  if (code === "es") {
    return (
      <span
        className={baseClasses}
        style={{
          background:
            "linear-gradient(to bottom, #d52b1e 0 33.33%, #f9e300 33.33% 66.66%, #007934 66.66% 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  if (code === "en") {
    return (
      <span
        className={baseClasses}
        style={{
          background:
            "repeating-linear-gradient(to bottom, #b22234 0 7.69%, #ffffff 7.69% 15.38%)",
        }}
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-[54%] w-[46%] bg-[#3c3b6e]" />
      </span>
    );
  }

  if (code === "pt") {
    return (
      <span className={cn(baseClasses, "bg-[#009b3a]")} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ffdf00]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#002776]" />
      </span>
    );
  }

  if (code === "fr") {
    return (
      <span
        className={baseClasses}
        style={{
          background:
            "linear-gradient(to right, #002395 0 33.33%, #ffffff 33.33% 66.66%, #ed2939 66.66% 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  if (code === "de") {
    return (
      <span
        className={baseClasses}
        style={{
          background:
            "linear-gradient(to bottom, #000000 0 33.33%, #dd0000 33.33% 66.66%, #ffce00 66.66% 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  if (code === "it") {
    return (
      <span
        className={baseClasses}
        style={{
          background:
            "linear-gradient(to right, #009246 0 33.33%, #ffffff 33.33% 66.66%, #ce2b37 66.66% 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  if (code === "zh-CN") {
    return (
      <span className={cn(baseClasses, "bg-[#de2910]")} aria-hidden="true">
        <span className="absolute left-1 top-0.5 text-[7px] leading-none text-[#ffde00]">
          ★
        </span>
      </span>
    );
  }

  return (
    <span className={cn(baseClasses, "bg-white")} aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bc002d]" />
    </span>
  );
}

function setTranslateCookie(languageCode: string) {
  const isSpanish = languageCode === "es";
  const value = isSpanish ? "" : `/es/${languageCode}`;
  const expires = isSpanish
    ? "Thu, 01 Jan 1970 00:00:00 GMT"
    : "Fri, 31 Dec 9999 23:59:59 GMT";

  document.cookie = `${TRANSLATE_COOKIE}=${value}; expires=${expires}; path=/`;

  const hostname = window.location.hostname;
  if (hostname && !hostname.includes("localhost")) {
    document.cookie = `${TRANSLATE_COOKIE}=${value}; expires=${expires}; domain=.${hostname}; path=/`;
  }
}

function findTranslateCombo() {
  return document.querySelector<HTMLSelectElement>(".goog-te-combo");
}

function setImportantStyle(
  element: HTMLElement,
  property: string,
  value: string
) {
  if (
    element.style.getPropertyValue(property) !== value ||
    element.style.getPropertyPriority(property) !== "important"
  ) {
    element.style.setProperty(property, value, "important");
  }
}

function hideTranslateChrome() {
  setImportantStyle(document.documentElement, "top", "0px");
  setImportantStyle(document.documentElement, "margin-top", "0px");

  if (document.body) {
    setImportantStyle(document.body, "top", "0px");
    setImportantStyle(document.body, "margin-top", "0px");
  }

  document
    .querySelectorAll<HTMLElement>(TRANSLATE_CHROME_SELECTOR)
    .forEach((element) => {
      if (element.id === "google_translate_element") return;

      setImportantStyle(element, "display", "none");
      setImportantStyle(element, "visibility", "hidden");
      setImportantStyle(element, "height", "0px");
      setImportantStyle(element, "max-height", "0px");
      setImportantStyle(element, "overflow", "hidden");
    });
}

function queueTranslateChromeCleanup() {
  hideTranslateChrome();
  window.setTimeout(hideTranslateChrome, 80);
  window.setTimeout(hideTranslateChrome, 400);
  window.setTimeout(hideTranslateChrome, 1200);
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(() => {
    if (typeof window === "undefined") return siteConfig.languages[0]?.code ?? "es";

    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (
      savedLanguage &&
      siteConfig.languages.some((item) => item.code === savedLanguage)
    ) {
      return savedLanguage;
    }

    return siteConfig.languages[0]?.code ?? "es";
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const languages = siteConfig.languages;
  const selectedLanguage = useMemo<LanguageOption>(
    () =>
      languages.find((language) => language.code === selectedCode) ??
      languages[0],
    [languages, selectedCode]
  );

  const applyLanguage = (languageCode: string, shouldReloadSpanish = true) => {
    localStorage.setItem(STORAGE_KEY, languageCode);
    setSelectedCode(languageCode);
    setIsOpen(false);
    setTranslateCookie(languageCode);
    queueTranslateChromeCleanup();

    if (languageCode === "es") {
      if (shouldReloadSpanish) window.location.reload();
      return;
    }

    const combo = findTranslateCombo();
    if (combo) {
      combo.value = languageCode;
      combo.dispatchEvent(new Event("change"));
      return;
    }

    window.setTimeout(() => {
      const delayedCombo = findTranslateCombo();
      if (delayedCombo) {
        delayedCombo.value = languageCode;
        delayedCombo.dispatchEvent(new Event("change"));
        queueTranslateChromeCleanup();
      } else {
        window.location.reload();
      }
    }, 900);
  };

  useEffect(() => {
    const includedLanguages = languages.map((item) => item.code).join(",");

    window.googleTranslateElementInit = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            includedLanguages,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        const savedLanguage = localStorage.getItem(STORAGE_KEY);
        if (savedLanguage && savedLanguage !== "es") {
          window.setTimeout(() => applyLanguage(savedLanguage, false), 500);
        }

        queueTranslateChromeCleanup();
      }
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return;
    }

    if (!document.querySelector("script[data-google-translate]")) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.dataset.googleTranslate = "true";
      document.body.appendChild(script);
    }

    queueTranslateChromeCleanup();
  }, [languages]);

  useEffect(() => {
    let frameId = 0;

    const scheduleCleanup = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        hideTranslateChrome();
      });
    };

    hideTranslateChrome();

    const observer = new MutationObserver(scheduleCleanup);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative notranslate" translate="no">
      <div id="google_translate_element" aria-hidden="true" />

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-heading text-[11px] font-bold text-white transition-colors hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Cambiar idioma"
      >
        <Globe className="h-3.5 w-3.5" />
        <span suppressHydrationWarning>
          <FlagIcon code={selectedLanguage.code} />
        </span>
        <span suppressHydrationWarning>{selectedLanguage.label}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-[70] mt-2 w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-white text-dark shadow-2xl shadow-black/25 transition-all duration-200",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
        role="listbox"
        aria-label="Lista de idiomas"
      >
        <div className="border-b border-gray-100 px-4 py-3">
          <p className="font-heading text-sm font-bold">Elegir idioma</p>
          <p className="mt-0.5 text-xs text-gray-text">
            Selecciona el país y lenguaje.
          </p>
        </div>

        <div className="max-h-[340px] overflow-y-auto p-2">
          {languages.map((language) => {
            const isSelected = language.code === selectedLanguage.code;

            return (
              <button
                key={language.code}
                type="button"
                onClick={() => applyLanguage(language.code)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  isSelected
                    ? "bg-orange/10 text-orange"
                    : "text-dark hover:bg-mist"
                )}
                role="option"
                aria-selected={isSelected}
              >
                <FlagIcon code={language.code} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold">
                    {language.language}
                  </span>
                  <span className="block truncate text-xs text-gray-text">
                    {language.country}
                  </span>
                </span>
                {isSelected && <Check className="h-4 w-4 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
