Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles Me.Load
        MsgBox("Benutzername: " + Environment.UserName)
        Me.Close()
    End Sub
End Class
