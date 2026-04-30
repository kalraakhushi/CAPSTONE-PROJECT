import { useEffect, useState, useCallback } from "react";

/**
 * Simple reusable API fetch hook.
 * - accepts async function returning axios response
 * - dependencies array to re-run
 */
export function useApiFetch(apiFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!apiFn);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!apiFn) return;
    setLoading(true);
    setError(null);
    try {
      const res = await apiFn();
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps.length ? deps : [apiFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
