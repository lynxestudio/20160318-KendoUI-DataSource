# Entendiendo kendo UI DataSource de Telerik con JavaScript

El control DataSource es uno de los componentes centrales en la suite de controles Kendo UI de Telerik ya que es el componente que proporciona el acceso a fuentes de datos para el resto de los controles de la suite, entre las fuentes de datos que soporta el control se encuentran los formatos JSON, XML y Odata, estas fuentes de datos pueden estar de forma local o remota respectivamente.

Uno de los controles que más se complementa de la funcionalidad del DataSource es sin duda el control Grid, ya que no solo obtiene los datos del DataSource, sino que además el comportamiento del Grid se ve influido por la configuración que el DataSource le proporcione.

A continuación enumeraré las opciones para la configuración del DataSource que utilicé en este ejemplo:

Transport	Esta opción describe la configuración del endpoint en donde se encuentran los datos se configuran opciones como: URL, HTTP Verb, Data Type, etc.
Transport.Read	Se utiliza cuando se van a solicitar los datos desde una ubicación remota como un web service o server.
PageSize	El número de registros por página.
Schema	El diseño lógico de los datos.
Schema. Data	Se establece la estructura que contiene los datos recibida como respuesta desde un servidor remoto.
Schema.Total	El número total de registros que contiene la estructura de datos recibida como respuesta desde un servidor remoto.
En el siguiente programa de ejemplo, utilizo la propiedad transport del DataSource para obtener el archivo authors.txt que se encuentra en el URL: “http://127.0.0.1/~martin/SamplesKendo/authors.txt” (este archivo se encuentra en un Apache Web Server), y los datos contenidos están en formato JSON como se muestra a continuación:

Fig 1 El archivo authors.json.



Una vez teniendo el archivo de datos, la configuración del DataSource queda como en el siguiente código JavaScript



Esa es la parte JavaScript que tiene la funcionalidad, a continuación el código de la página HTML completa.



Al ejecutar el código se produce el siguiente resultado:

Fig 2 Databinding con el control DataSource.



Fig 3 Paging con DataSource y Grid.



Fig 4 Last record con DataSource y Grid.
