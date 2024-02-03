# Tarea Web Components

Para esta tarea se requiere tener bases en la creación de web components, eres libre de usar los nombres que quiera, un ejemplo [aquí](<[https://](https://github.com/earamirez-personal/wc-mi-boton)https://>), si quieres aplicar estilos CSS puedes hacerlo a tu conveniencia.

## Descripción

Crea 5 tarjetas de una lista de usuarios en el que se especifique por cada usuario una foto, nombre, email y un botón que al darle click devuelva el correo electrónico del usuario seleccionado. Ejemplo de consumo:

```html
<wc-usuarios></wc-usuarios>

<script>
  const element = document.querySelector("wc-usuarios");

  element.setAttribute("lista", []);
  element.addEventListener("usuario-seleccionado", function (e) {
    alert(e.detail.email);
  });
</script>
```
