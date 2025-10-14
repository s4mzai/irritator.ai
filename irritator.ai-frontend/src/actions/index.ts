"use server";

export async function explain(_prevState:any, formData:any ) {
  const code = formData.get("code");
  const language = formData.get("language");
  const explainCharLength = formData.get("charLength") 

  try {
    const baseUrl = import.meta.env.VITE_SERVER_URL;
    const res = await fetch(`${baseUrl}/api/explain-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language, explainCharLength }),
    });

    if (!res.ok) {
      let msg = `Failed to fetch the results`;
      try {
        const errData = await res.json();
        if (errData?.error) msg = errData.error;
      } catch {}
      return {
        success: false,
        error: msg,
      };
    }

    const data = await res.json();

    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      error: `An Error Occured: ${err}`,
    };
  }
}