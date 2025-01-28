@echo off

REM Execute Node.js commands
node links.js


REM Define the source and destination folders
set "game_name=dep"

REM Define the counter file
set "counter_file=%~dp0..\counter.txt"

REM Check if the counter file exists, if not create it and set counter to 0
if not exist "%counter_file%" (
    echo 0 > "%counter_file%"
)

REM Read the counter from the file
set /p counter=<"%counter_file%"

REM Increment the counter
set /a counter+=1

REM Save the new counter value to the file
echo %counter% > "%counter_file%"


REM Execute Git commands
git add .
git commit -m "Auto commit - Execution number %counter% for %game_name%"
git push origin main

REM Pause the script to see the output
pause