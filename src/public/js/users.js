console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        console.log("id:", id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log('memberStatus:', memberStatus);

       // TODO: Axios updateChosenUser
       axios.post("/admin/user/edit", {
        _id: id,
       "memberStatus": memberStatus});
    });
});