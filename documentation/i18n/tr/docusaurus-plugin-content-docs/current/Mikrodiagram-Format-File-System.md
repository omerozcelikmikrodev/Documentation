---
title: Format File System
---

You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.

* Before starting, make sure that all USB connections to device are closed.

* Power OFF the device, disconnect the DC supply connection.

<center>

 ![](http://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* Connect the USB cable between the computer and the device.

* Power ON device , connect the DC supply.
 
<center>

 ![](http://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.

<center>

![mikrodiagram-formatfilesystem-01](/img/mikrodiagram-formatfilesystem-01.png)

</center>

* After the device starts in boot mode, write "AT+FORMATFS=1" into the "Send Command" box  and click "SEND" button. In this stage, the system light on the device will flash rapidly and the error light will be steady. After the process is finished, the system led will start to flash normally again. The format procedure will take about 2-3 minutes. Do not power off the device during the format process. The device will reset several times and it will disconnect the USB connection.

* You can check whether the format process has finished or not by checking the boot version of the device. To check the boot version connect USB port and then write "AT+VERSION=?" into the "Send Command" box  and click "SEND" button. If you can see the boot version on the console after this command, it means that you are ready to load the firmware on the device.

* Go to Step 7 on [Loading Firmware](Mikrodiagram-Updating-Firmware) page and continue loading firmware. Since the device is formatted, initial boot time will take significantly longer compared to standard firmware loading process.

Download Serial Loader application from the link below :

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)
