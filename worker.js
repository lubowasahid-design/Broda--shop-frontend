export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          success: true,
          shop: "Broda Shop",
          message: "Broda Shop is online"
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
        message: "Welcome to Broda Shop"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
