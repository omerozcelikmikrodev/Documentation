---
title: ViewPLUS SCADA Client
---

## Client Operator Screen

To connect to the SCADA server, you need to enter the user, password, server address and port information into the client software. You need to use "User Manager" to create a new user. When this information is entered correctly, an encrypted connection is established between the server and the client software, and the project main screen sent from the server is displayed on the client.

Content shown on the client may differ depending on the access privileges of the user, the pages and the defined tags. Pages that do not corresponds with the access rights of the user will not be shown in the "page selector", or links that are directed to those pages will not work. If a visual element on the page contains a tag that the user does not have access to, the user is prevented from watching or controlling this item.

ViewPLUS Client is used to connect to an open ViewPLUS SCADA server. Visual operations developed on the editor screen can be viewed on the ViewPLUS Client screen.

<center>

![client-operator-screen-01](/img/client-operator-screen-01.png)

</center>

| Numbers | Names | Description |
| ------ | ------ | ------ |
| 1 | Username | Username created in the project is entered|
| 2 |  User Password  | User password created in the project is entered |
| 3 |  IP and Port  | IP and Port information of the server computer is entered|
| 4 | Log In | After all information is entered click for connection to the server|
| 5 | Remember User | Stores end user information entered |
| 6 | Profiles | Automatically retrieves added user information |
| 7 | Toolbar | When connected to the server, it performs opening and closing of the left window|
| 8 | Appllication |  |
| 8.1 | Save Current Profile | Creates a new profile with the information on the client login screen |
| 8.2 | Exit | Closes the ViewPLUSClient program |
| 8.3 | Log out | Logout from the connected server |
| 9 | Settings |  |
| 9.1 | Language | Turkish or English language selection |
| 9.2 | Draw ConnectionFault Overlay | It shows communication interrupted information on components when connection with the server is lost|
| 9.3 | Cache Current Page | Temperature |
| 9.4 | Clear Cache Folder | Temperature |
| 9.5 | Remember Last Visited Page | The last visited page appears on the screen when connecting to the server with ViewPLUSClient|
| 9.6 | Disable Alarm Sound  | Disables the alarm sound that is active|
| 10 | Tools |  |
| 10.1 | Reports  | Brings reports page to window on screen |
| 10.2 | Pages  | Brings project pages to window on screen|
| 11 | Window |  |
| 11.1 | Full Screen  | Show client screen in full window|
| 11.2 | Detach Current Page | The last page appears on the screen by automatically logging in to a different client screen|
| 11.3 | Scale To | Page appears with all components on screen size |
| 11.4 | Zoom In  | Zooms the page view |
| 11.5 | Zoom Out | Zooms out the page view |
| 11.6 | Split Alarms Upside Down | Shows the alarm window page at the bottom of the client screen|
| 11.7 | Split Alarms Side by Side | Shows the alarm window page on the right side of the client screen |
| 11.8 | Remove Splits | Closes the alarm windows that are open at the bottom or right of the client screen|
| 12 | Help |  |
| 12.1 | DebugWin | Shows Tag ID and Data Value information of the labels on the page screen|
| 12.2 | About ViewPLUSClient | Shows client version information |

## Client Help Content

Defined Help Content Link on Client program can be changed on Pro-jects>>Client Options menu by using "Custom Help Link for Clients" sec-tion. If you would like to disable this option on Client program you can se-lect "Disable Page Selector Panel" option.

<center>

![viewplus-client-help-content-01](/img/viewplus-client-help-content-01.png)

</center>

When the "Help Contents" option is clicked under the "Help" tab on the Cli-ent Program, it redirects to the link that defined in the Editor Program.

<center>

![viewplus-client-help-content-02](/img/viewplus-client-help-content-02.png)

</center>

When the "Help Contents" option is clicked as above, the link defined in the editor is opened over the internet browser.

![viewplus-client-help-content-03](/img/viewplus-client-help-content-03.png)
