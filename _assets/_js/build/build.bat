@echo off
cls

echo.
echo.- Iniciando build...
echo.

cd ..\..\

rd /s /q "js"
mkdir "js"
xcopy _js js /E/Y/Q


rd /s /q "js\build"
rd /s /q "js\tests"

echo.

for /R js %%a in (*.js) do java -jar _js\build\compiler.jar --js "%%a" --js_output_file "%%a_min"

for /R js %%a in (*.js) do del "%%a"

for /R js %%a in (*.js_min) do ren "%%a" *.js

cls

echo.
echo.- Concluído!
echo.