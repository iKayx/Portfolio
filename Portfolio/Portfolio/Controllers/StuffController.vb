Imports System.Web.Mvc

Public Class StuffController
    Inherits Controller

    ' GET: Stuff
    Function Index() As ActionResult
        Return View()
    End Function

    Function Links() As ActionResult
        ViewData("Message") = "Useful Links"

        Return View("Links")
    End Function

    Function ImageCropper() As ActionResult
        ViewData("Message") = "Crop Images"

        Return View("CropImages")
    End Function

End Class