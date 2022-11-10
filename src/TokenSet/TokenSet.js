export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://farid-kitchen-server-site.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("kitchenToken", data.token);
    });
};
