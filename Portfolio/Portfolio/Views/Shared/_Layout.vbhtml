<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="ROBOTS" content="NOODP">
    <meta name="author" content="Marvin Kayx" />

    <meta property="og:locale" content="en_US">
    <meta property="og:title" content="Portfolio from Marvin Kayx">
    <meta property="og:description" content="Here are some of my things i did in the past">
    <meta property="og:url" content="https://www.Kayx.de">
    <meta property="og:site_name" content="Marvin Kayx">
    <meta property="og:image" content="">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Portfolio from Marvin Kayx">
    <meta name="twitter:description" content="Here are some of my things i did in the past">
    <meta name="twitter:site" content="&#064fna_kayx">
    <meta name="twitter:image" content="">

    <title>@ViewBag.Title</title>

    @Styles.Render("~/Content/css")
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    @Scripts.Render("~/bundles/modernizr")
</head>
<body>
    <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">Marvin Kayx</a>
        <ul class="container nav navbar-nav">
            <li class="nav-item active">
                @Html.ActionLink("Home", "Index", Nothing, New With {.class = "nav-link"})
            </li>
            <li class="nav-item">
                @Html.ActionLink("ToDo's", "todo", Nothing, New With {.class = "nav-link"})
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>
    </nav>


        @RenderBody()
        <hr />
        <footer>
            <p>&copy; @DateTime.Now.Year - Kayx</p>
        </footer>

    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/bootstrap")

    @RenderSection("scripts", required:=False)
</body>
</html>
