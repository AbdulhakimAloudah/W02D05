let list = [];
$("#add").click(() => {
  if ($("input[type=text").val().trim().length > 0) {
    list.push({ item: $("input[type=text").val(), isCompleted: false });
    renderList();
  }
});

const renderList = () => {
  $("ul").html("");
  list.forEach((element, i) => {
    $("ul").append(
      `<li id='${"li" + i}'><span id='${"allSpan" + i}'>${
        element.item
      }  <span onclick='edit(${i})'>Edit</span> <span onclick='remove(${i})'>Remove</span> </span></li>`
    );
  });
};

$("#clear").click(() => {
  list = [];
  renderList();
});
