export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          success: true,
          shop: "Broda hub",
          message: "Broda hub is online"
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Welcome to Broda hub"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
