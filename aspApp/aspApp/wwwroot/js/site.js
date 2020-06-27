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

//loadUserList('Url.Action("UserList", "User", null, Context.Request.Scheme)');
//loadUserList('@Url.Action("UserList", "User")')

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

submit_formAddUser = () => {
    //var xformAddUser = $("#formAddUser");
    //xformAddUser.submit(function (e) {
    //    e.preventDefault();

    //    //var input =
    //    //    xformAddUser.find("action_good")
    //    //        .attr("disabled", true);

    //    var actionUrl = xformAddUser.attr("action");
    //    $(".error").text("");

    //    $.post(actionUrl, xformAddUser.serialize(), function (res) {
    //        if (res == ) {
    //            input.attr("disabled", false);
    //            closeModal();
    //            loadUserList('User/UserList');
    //        } else {
    //            $(".error").html(res);
    //            input.attr("disabled", false);
    //        }

    //        console.log(res);
    //    });
    //})


}