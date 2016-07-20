Imports System.Web.Optimization
Public Module BundleConfig
    ' Weitere Informationen zu Bundling finden Sie unter "http://go.microsoft.com/fwlink/?LinkId=301862".
    Public Sub RegisterBundles(ByVal bundles As BundleCollection)

        bundles.Add(New ScriptBundle("~/bundles/modernizr").Include(
                    "~/Scripts/modernizr-custom.js"))

        bundles.Add(New ScriptBundle("~/bundles/jquery").Include(
                    "~/Scripts/jquery-3.0.0.js",
                    "~/Scripts/jquery-2.2.4.js",
                    "~/Scripts/tether.js"))

        bundles.Add(New ScriptBundle("~/bundles/bootstrap").Include(
                  "~/Scripts/Bootstrap.js"))

        bundles.Add(New StyleBundle("~/Content/css").Include(
                  "~/Content/Material Design/Bootstrap 4 Alpha.css",
                  "~/Content/Material Design/Bootstrap 4 Material.css"))

        BundleTable.EnableOptimizations = True
    End Sub
End Module

