<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="UTF-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
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

</head>
<body>
    <nav class="navbar navbar-light bg-faded">
        @Html.ActionLink("Home", "Index", Nothing, New With {.class = "navbar-brand"})
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

    <footer class="page-footer blue center-on-small-only">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-md-4 col-md-offset-1">
                    <h5 class="title">Footer Content</h5>
                    <p>Here you can use rows and columns here to organize your footer content.</p>
                </div>

                <div class="col-xs-4 col-md-2">
                    <h5 class="title">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>

                <div class="col-xs-4 col-md-2">
                    <h5 class="title">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>

                <div class="col-xs-4 col-md-2">
                    <h5 class="title">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-copyright">
            <div class="container-fluid">
                @DateTime.Now.Year Copyright: <a href="www.Kayx.de" target="_blank"> Marvin Kayx </a>

            </div>
        </div>
    </footer>

    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/bootstrap")
    @Scripts.Render("~/bundles/CustomJS")
    <script>
        new WOW().init();
    </script>
    @RenderSection("scripts", required:=False)
</body>
</html>
