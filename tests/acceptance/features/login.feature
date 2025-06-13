Feature: Funcionalidad de login
    Como usuario me gustaria poder iniciar sesion en la aplicacion para poder acceder al contador.
    Scenario: hacer login con las credenciales validas
        Given Entro como usuario a la pagina de login
        And ingreso el nombre de usuario 'standard_user'
        And ingreso la contraseña de usuario 'standard_user'
        When hago click en el boton de login
        Then navego a la pantalla de home
