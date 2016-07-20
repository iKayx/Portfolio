<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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

    <title>@ViewBag.Title - Meine ASP.NET-Anwendung</title>

    @Styles.Render("~/Content/css")

    @Scripts.Render("~/bundles/modernizr")
</head>
<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                @Html.ActionLink("Anwendungsname", "Index", "Home", New With {.area = ""}, New With {.class = "navbar-brand"})
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>@Html.ActionLink("Startseite", "Index", "Home")</li>
                    <li>@Html.ActionLink("ToDo's", "ToDO", "Home")</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container body-content">
        @RenderBody()
        <hr />
        <footer>
            <p>&copy; @DateTime.Now.Year - Meine ASP.NET-Anwendung</p>
        </footer>
    </div>

    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/bootstrap")

    @RenderSection("scripts", required:=False)
</body>
</html>
