loadUserList = (url) => {
    var xDiv = $("#main-container");

    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            xDiv.html(res);
        }
    })
}

loadAddUser = (url) => {
    var xDiv = $("#modalRaiz");

    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            xDiv.html(res);
            xDiv.show();

            var xDivAdd = $("#modalAdd");
            xDivAdd.show();
        }
    })
}

loadEditUser = (url) => {
    var xDiv = $("#modalRaiz");

    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            xDiv.html(res);

            xDiv.show();
            var xDivEdit = $("#modalEdit");
            xDivEdit.show();
        }
    })
}

loadDeleteUser = (url) => {
    var xDiv = $("#modalRaiz");

    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            xDiv.html(res);

            xDiv.show();
            var xDivDelete = $("#modalDelete");
            xDivDelete.show();
        }
    })
}

closeModal = () => {
    var xDiv = $("#modalRaiz");
    var xDivAdd = $("#modalAdd");
    var xDivEdit = $("#modalEdit");
    var xDivDelete = $("#modalDelete");

    xDiv.hide();
    xDivAdd.hide();
    xDivEdit.hide();
    xDivDelete.hide();
}

submited_form = () => {
    closeModal();
    loadUserList('User/UserList');
}