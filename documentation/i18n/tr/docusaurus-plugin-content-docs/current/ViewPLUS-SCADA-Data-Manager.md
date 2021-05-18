---
title: ViewPLUS SCADA Data Manager
---

Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab.

<center>

![data-manager-01](/img/data-manager-01.png)
***<center>Figure 1: Tools Bar</center>***

</center>

Archiving is selected in the window that opens.

<center>

![data-manager-02](/img/data-manager-02.png)
***<center>Figure 2: Data Manager Menu</center>***

</center>

Date is entered in Archieve Data Older Than section. All logs saved in the database before the date entered will be transferred to the archive database. Archiving is started by clicking Start Archiving.

<center>

![data-manager-03](/img/data-manager-03.png)
***<center>Figure 3: Archieve Screen-1</center>***

</center>

When OK is selected for the warning displayed after archiving, archived logs in the main database are deleted. Since these logs are deleted, they will not be displayed in reporting in the main project. It can only be accessed from the Archive database. If Cancel is selected, logs are kept in the main database and logs are saved in the archive database.

<center>

![data-manager-04](/img/data-manager-04.png)
***<center>Figure 4: Archieve Screen-2</center>***

</center>

After seeing the text Archive process completed in the data manager, archiving process is completed.

<center>

![data-manager-05](/img/data-manager-05.png)
***<center>Figure 5: Archieve Screen-3</center>***

</center>

It is seen that a new database named main database archive has been created.

<center>

![data-manager-06](/img/data-manager-06.png)
***<center>Figure 6: Database Archieve Screen</center>***

</center>

Logs before the archiving date determined in the data manager are displayed in the archivetestlog_archive database.

<center>

![data-manager-07](/img/data-manager-07.png)
***<center>Figure 7: Database Archieve Log Screen</center>***

</center>