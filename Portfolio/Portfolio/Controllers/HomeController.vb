Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        Return View()
    End Function

    Function ToDo() As ActionResult
        ViewData("Message") = "Todo List"

        Return View("ToDo's")
    End Function

    Function Gallery() As ActionResult
        ViewData("Message") = "Gallery"

        Return View("Gallery")
    End Function
End Class
