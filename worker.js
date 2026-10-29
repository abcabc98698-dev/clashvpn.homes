const DEFAULT_KEY = "pk_live_clashvpn_homes_form";

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const key = env.PUBLIC_FORMGONG_ACCESS_KEY;
    if (!key || key === DEFAULT_KEY || !(response.headers.get("content-type") || "").startsWith("text/html")) return response;
    return new HTMLRewriter()
      .on(`input[name="access_key"][value="${DEFAULT_KEY}"]`, { element: (input) => input.setAttribute("value", key) })
      .transform(response);
  },
};
