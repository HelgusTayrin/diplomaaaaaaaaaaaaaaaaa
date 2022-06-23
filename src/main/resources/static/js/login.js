$(
    function () {
        $('#loginformzalupa').on('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $.post("26.51.78.227:8080/users/registration",
            {
              login: "bigchungus",
              password: "skdlhfloshdflkhn"
            });
        });
    }
);