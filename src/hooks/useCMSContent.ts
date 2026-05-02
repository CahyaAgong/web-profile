import { useState, useEffect } from "react";

export function useCMSContent<T>(
  fetchFn: () => Promise<T>,
  defaultData: T,
  key: string = "data"
) {
  const [data, setData] = useState<T>(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const content = await fetchFn();
        if (!cancelled && content && Object.keys(content).length > 0) {
          const keyExists = key === "data" 
            ? Object.values(content).some(v => v !== null && v !== undefined)
            : (content as Record<string, unknown>)[key] !== undefined;
          
          if (keyExists) {
            setData(content);
          }
        }
      } catch (error) {
        console.warn(`[CMS] Failed to load ${key}, using fallback:`, error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [fetchFn, key]);

  return { data, loading };
}