Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        Return View()
    End Function

    Function ToDo() As ActionResult
        ViewData("Message") = "Your application description page."

        Return View("ToDo's")
    End Function
End Class
