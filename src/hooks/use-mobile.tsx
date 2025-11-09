import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 768;
const mediaQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

// 1. Função que "escuta" as mudanças na API do navegador
function subscribe(onChange: () => void) {
  const mql = window.matchMedia(mediaQuery);
  mql.addEventListener("change", onChange);
  
  // A função de "limpeza"
  return () => {
    mql.removeEventListener("change", onChange);
  };
}

// 2. Função que pega o valor atual
function getSnapshot() {
  return window.matchMedia(mediaQuery).matches;
}

// 3. Função que retorna um valor padrão no servidor (para evitar "flashes")
function getServerSnapshot() {
  return false; // No servidor, sempre assumimos que é desktop
}

/**
 * Hook otimizado para React 18+ que verifica o tamanho da tela.
 * Usa `useSyncExternalStore` para evitar "flashes" (hydration mismatch)
 * e garantir performance.
 */
export function useIsMobile() {
  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return isMobile;
}