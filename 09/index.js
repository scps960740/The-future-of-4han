window.addEventListener("load", function () {
  const app = document.getElementById("app");

  // $.get("https://jsonplaceholder.typicode.com/posts?id=2", function (data) {
  //   const firstItem = data[0]
  //   app.innerHTML = `<h1>${firstItem.title}</h1>`
  // });

  // $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
  $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
    const items = data.slice(0, 10);

    let list = "";

    items.forEach(function (item, index, array) {
      list = list + `<p>第${index + 1}筆: ${item.body}</p>`;
    });

    // list `<p>...</p><p>...</p><p>...</p><p>...</p>`
    app.innerHTML = list;
  });

  $.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    function (data) {
      // TODO del
      console.log('新增成功', data);
    }
  );
});
