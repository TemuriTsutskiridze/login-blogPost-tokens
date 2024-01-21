async function fetchData() {
  const response = await fetch("https://george.pythonanywhere.com/api/login/", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "tamogagniashvili@redberry.ge",
    }),
  });
  const data = await response.json();
  console.log(data);
  token = data.token;
  localStorage.setItem("token", token);
  await uploadBlog();
}

async function uploadBlog() {
  const blogObj = {
    title: "ეფექტური პროგრამირება",
    author: "ლილე კვარაცხელია",
    publish_date: "2024-01-19T18:06:19Z",
    description:
      "ეფექტური პროგრამირება მოითხოვს მკაფიო და ორიენტირებულ გონებას. მეხსიერების კონსოლიდაციისა და პრობლემების გადაჭრის უნარების გასაუმჯობესებლად ხარისხიანი ძილის პრიორიტეტი მიანიჭეთ. დარწმუნდით, რომ დაამყარეთ ძილის თანმიმდევრული რუტინა, რათა ხელი შეუწყოთ ოპტიმალურ კოგნიტურ ფუნქციას თქვენი გაღვიძების საათებში.",
    image:
      "https://t3.ftcdn.net/jpg/05/01/05/92/240_F_501059290_JGpwkUebVRzYFPTpS2M1q7WE6KjQIWbV.jpg",
    categories: [
      {
        title: "ხელოვნური ინტელექტი",
        text_color: "#B71FDD",
        background_color: "#B11CD6",
      },
    ],
    email: "elene.metreveli@redberry.ge",
  };

  const response = await fetch(
    "https://george.pythonanywhere.com/api/blogs/create/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blogObj),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    console.log("Error", error);
    return;
  }
  const data = await response.json();
  console.log(data);
}

fetchData();
