# Analizador Leg.51897
Construcción de un Analizador con ANTLR4 y JavaScript con una gramática en notación ECMAScript

Un compilador que transforma funciones simples con `console.log` a su representación ejecutable en JavaScript, mostrando la simplificación de expresiones aritméticas.

## 🔍 Requisitos Previos

- **Git** ([Descargar](https://git-scm.com/downloads))
- **Node.js v18+** ([Descargar](https://nodejs.org/))
- **Java JRE 8+** (Solo para regenerar el analizador, [Descargar](https://www.java.com/download/))

## 📥 Clonación e Instalación

Sigue estos pasos para clonar e instalar dependencias del proyecto:

1. **Abre Git Bash/PowerShell** (Windows) o **Una terminal** (Linux/Mac) en la carpeta donde quieres clonar el repositorio Github.

2. Ejecutar lo siguiente en el **Git Bash/PowerShell** (Windows) o **Una terminal** (Linux/Mac)
   ```bash
   git clone https://github.com/AgustinArg13/51897---analizador.git
3. **Instalar Dependencias:**
   ```bash
   # Instalar dependencias de Node.js (ANTLR4 runtime y demás)
   npm install

   # Instalar ANTLR4 globalmente (opcional, solo si necesitas regenerar el analizador)
   npm install -g antlr4

## 🛠 Uso del Analizador

Sigue estos pasos para abrir el analizador, modificar el archivo de entrada y ejecutar el analizador:

1. Abre la carpeta **SSL---51897**:
****
   ![captura1 0](https://github.com/user-attachments/assets/dd41a440-03f0-4b9f-bd46-41aa86c381e5)
****
2. Haz **clic derecho** y abrir de preferencia **PowerShell**, o sino **Git Bash**:
****
   ![captura2 0](https://github.com/user-attachments/assets/8142f798-56ab-49a0-9f16-96d80cc5d669)
****
3. Ahora con esto ya iniciado, abrimos el archivo en el block de notas/hacemos doble clic en **input.txt** en la carpeta **SSL---51897**:
****
   ![captura3 0](https://github.com/user-attachments/assets/52eec027-cdae-4261-a119-9f37a3d368a9)
****
4. Volviendo a la carpeta donde se clono/instaló el proyecto, *repetimos el paso anterior* con los **4** archivos **input.txt**:
****
   ![captura4 0](https://github.com/user-attachments/assets/4b9a1238-e23b-48de-bd33-d48ddb05d78a)
****
5. Ejemplo de como tendríamos que tener el block de notas:
****
   ![captura5 0](https://github.com/user-attachments/assets/5c716c77-5d19-4cfa-b6a0-b499d7463118)
****
6. Antes de iniciar el analizador primero copiamos uno de los input.txt denominado como **correcto / incorrecto**:
****
   ![captura6 0](https://github.com/user-attachments/assets/5080b48e-68d9-4a0f-b071-7e82a9f5e86d)
****
7. Luego pegamos el anterior copiado, en el **input.txt** original y guardamos con **Ctrl + G** o como se indica:
****
   ![captura7 0](https://github.com/user-attachments/assets/d6fe9f89-6cbf-43c5-813e-937953d26632)
****
   ![captura8 0](https://github.com/user-attachments/assets/95775bd8-0158-4f0b-8d81-2bb09882d86a)
****
8. Volvemos a la pestaña **PowerShell** o **Git Bush** y escribimos el siguiente código para iniciar el analizador:
   ****
   ```bash
   npm start
****
   ![captura9 1](https://github.com/user-attachments/assets/1b0746a5-1dcb-4170-922b-1910ae5e2966)
****
   ![captura10 1](https://github.com/user-attachments/assets/dc0bffbb-31f7-42ee-a84d-1931ab77d32e)

****
9. Damos enter y el analizador procede a ejecutarse, *repetimos los pasos* **6, 7, 8 y 9** para probar con otra entrada deseada. 
****





























