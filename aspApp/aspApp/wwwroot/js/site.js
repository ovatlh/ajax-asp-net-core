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

submited_form = () => {
    closeModal();
    loadUserList('User/UserList');
}

AjaxPost = form => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.isValid) {
                    submited_form()
                }
                else
                    console.log(res)
            },
            error: function (err) {
                console.log(err)
            }
        })
        //to prevent default form submit event
        return false;
    } catch (ex) {
        console.log(ex)
    }
}

//$(document).ready(function () {
//    if (sessionStorage.curpos) {
//        $("main").scrollTop(sessionStorage.curpos);
//        sessionStorage.removeItem("curpos");
//    }

//    $(".cancel").click(function () {
//        sessionStorage.curpos = $("main").scrollTop();
//        window.location.reload();
//    });

//    $(".formAjax").submit(function (e) {
//        e.preventDefault();

//        var input =
//            $(this).find("input[type=submit]")
//                .attr("disabled", true);

//        var actionUrl = $(this).attr("action");
//        $(".error").text("");

//        sessionStorage.curpos = $("main").scrollTop();

//        $.post(actionUrl, $(this).serialize(), function (res) {
//            if (res == true) {
//                window.location.reload();
//            } else {
//                $(".error").html(res);
//                input.attr("disabled", false);
//            }
//        });
//    });

//    $(".formAjaxWithFile").submit(function (e) {
//        e.preventDefault();

//        var input =
//            $(this).find("input[type=submit]")
//                .attr("disabled", true);

//        var actionUrl = $(this).attr("action");
//        var method = $(this).attr("method");

//        $(".error").text("");

//        sessionStorage.curpos = $("main").scrollTop();

//        var form = $(this).closest("form");
//        var formData = new FormData(form[0]);

//        $.ajax({
//            type: method,
//            data: formData,
//            dataType: "json",
//            url: actionUrl,
//            processData: false,
//            contentType: false,
//            success: function (res) {
//                if (res == true) {
//                    window.location.reload();
//                } else {
//                    $(".error").html(res);
//                    input.attr("disabled", false);
//                }
//            }

//        });
//    });
//});

//submit_formAddUser = () => {
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

    //var result = document.getElementById("formAddUser").submit();
    //if (result == 200) {
    //    closeModal();
    //    loadUserList('User/UserList');
    //}

    //$('#formAddUser')
    //    .ajaxForm({
    //        url: 'User/AddUser',
    //        dataType: 'json',
    //        success: function (res) {
    //            console.log(res);

    //            closeModal();
    //            loadUserList('User/UserList');
    //        }
    //    });

    //$(".formAjax").submit(function (e) {
    //    e.preventDefault();

    //    var input =
    //        $(this).find("input[type=submit]")
    //            .attr("disabled", true);

    //    var actionUrl = $(this).attr("action");
    //    $(".error").text("");

    //    sessionStorage.curpos = $("main").scrollTop();

    //    $.post(actionUrl, $(this).serialize(), function (res) {
    //        if (res == true) {
    //            console.log(res);
    //        } else {
    //            $(".error").html(res);
    //            input.attr("disabled", false);
    //            console.log(res);
    //        }
    //    });
    //});
    //$("#formAddUser").submit();

    //$("#formAddUser").submit(function (e) {
    //    e.preventDefault();
    //});

    //$(document).ready(function () {
    //    //document.getElementById("formAddUser").submit(function (e) {
    //    var formResult = document.getElementById("formAddUser");

    //    formResult.submit(function (e) {
    //        e.preventDefault();

    //        var actionUrl = $(this).attr("action");
    //        $(".error").text("");

    //        $.post(actionUrl, $(this).serialize(), function (res) {
    //            if (res == 200) {
    //                submited_form();
    //            } else {
    //                $(".error").html(res);
    //            }
    //            console.log(res);
    //        });
    //    });

    //    //$("#ddlCiudad").change(function () {
    //    //    $.ajax({
    //    //        url: "@Url.Action("GetClasificaciones", "Solicitudes")",
    //    //        data: { "id": $("#ddlCiudad option:selected").text() },
    //    //        // Url
    //    //        type: "get"  // Verbo HTTP
    //    //    })
    //    //        // Se ejecuta si todo fue bien.
    //    //        .done(function (result) {

    //    //            $("#ddlColoniaCiudadano option").each(function () {
    //    //                if ($(this).attr('value') != -1) {
    //    //                    $(this).remove();
    //    //                }
    //    //            })

    //    //            if (result != null) {
    //    //                console.log(result);
    //    //                $(result).each(function (i, item) {
    //    //                    let $option = $('<option />', {
    //    //                        text: item,
    //    //                        value: item,
    //    //                    });
    //    //                    $('#ddlColoniaCiudadano').prepend($option);
    //    //                })
    //    //            }
    //    //            e
    //    //        }) // Se ejecuta si se produjo un error.
    //    //        .fail(function (xhr, status, error) {
    //    //            console.log(error)
    //    //        })
    //    //        // Hacer algo siempre, haya sido exitosa o no.
    //    //        .always(function () {
    //    //        });
    //    //});
    //})

    //var form = document.getElementById("formAddUser");
    //function handleForm(event) {
    //    event.preventDefault();
    //}
    //form.addEventListener('submit', handleForm);
//}

//$(document).ready(function () {
//    $(document).on('submit', '#formAddUser', function () {
//        return false;
//    })
//});