---
title: Updating Firmware
---

You can update the firmware of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.

* Before starting, make sure that all USB connections to device are closed.

* Power OFF the device, disconnect the DC supply connection.

<center>

![](https://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* Connect the USB cable between the computer and the device.

* Click the "..." button and select the firmware with .mx3 extension.

<center>

![mikrodiagram-firmware-update-01](/img/mikrodiagram-firmware-update-01.png)

</center>

* Power ON device , connect the DC supply.
 
<center>

![](https://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.

<center>

![mikrodiagram-firmware-update-02](/img/mikrodiagram-firmware-update-02.png)

</center>

* After the device starts in boot mode, click on the "Start Loading Firmware" button
 
<center>

![mikrodiagram-firmware-update-03](/img/mikrodiagram-firmware-update-03.png)

</center>

* Wait for the firmware uploading to finish

<center>

![mikrodiagram-firmware-update-04](/img/mikrodiagram-firmware-update-04.png)

</center>

* After the process is completed, the USB connection will be closed automatically and the device will reboot once after verifying the flash file system.

<center>

![mikrodiagram-firmware-update-05](/img/mikrodiagram-firmware-update-05.png)

</center>

* Wait for a few minutes for the device to finalise the firmware upgrade and click "Open Port" to connect the device again. And check version information to confirm if the update operation is succesful by clicking on the "SEND" button with "AT+VERSION=?" parameter.

<center>

![mikrodiagram-firmware-update-06](/img/mikrodiagram-firmware-update-06.png)

</center>

Download Serial Loader application from the link below :

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)
