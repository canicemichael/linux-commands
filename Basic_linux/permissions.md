INTRODUCTION
Permissions specify what a particular person may or may not do with respect 
to a file or directory. As such, permissions are important in creating a 
secure environment. For instance you don't want other people to be changing 
your files and you also want system files to be safe from damage 
(either accidental or deliberate). Luckily, permissions in a Linux system 
are quite easy to work with.


SO WHAT ARE THEY?
Linux permissions dictate 3 things you may do with a file, read, write and 
execute. They are referred to in Linux by a single letter each.
* r read - you may view the contents of the file.
* w write - you may change the contents of the file.
* x execute - you may execute or run the file if it is a program or script.

For every file we define 3 sets of people for whom we may specify permissions.

* owner - a single person who owns the file. (typically the person who created 
the file but ownership may be granted to someone else by certain users)
* group - every file belongs to a single group.
* others - everyone else who is not in the group or the owner.

Three persmissions and three groups of people. That's about all there is 
to permissions really. Now let's see how we can view and change them.


VIEW PERMISSIONS
To view permissions for a file we use the long listing option for the command ls.
    ls  -l  [path]

![Terminal-screenshot](terminalpic.png?raw=true "Title")

In the above example the first 10 characters of the output are what we look at to identify permissions.

*   The first character identifies the file type. If it is a dash ( - ) then it is a normal file. If it is a d then it is a directory.
*    The following 3 characters represent the permissions for the owner. A letter represents the presence of a permission and a dash ( - ) represents the absence of a permission. In this example the owner has two permissions (read and write).
*   The following 3 characters represent the permissions for the group. In this example the group has the ability to read but not write or execute. Note that the order of permissions is always read, then write then execute.
*   Finally the last 3 characters represent the permissions for others (or everyone else). In this example they have the read permission and nothing else.


CHANGE PERMISSIONS
To change permissions on a file or directory we use a command called chmod It stands for change file mode bits which is a bit of a mouthfull but think of the mode bits as the permission indicators.

    chmod [permissions] [path]

chmod has permission arguments that are made up of 3 components

*   Who are we changing the permission for? [ugoa] - user (or owner), group, others, all
*   Are we granting or revoking the permission - indicated with either a plus ( + ) or minus ( - )
*    Which permission are we setting? - read ( r ), write ( w ) or execute ( x )

The following examples will make their usage clearer

Grant the execute permission to the group. Then remove the write permission for the owner.

![Terminal-screenshot](terminaltwo.png?raw=true "Title")

Don't want to assign permissions individually? We can assign multiple permissions at once.

![Terminal-screenshot](terminalthree.png?raw=true "Title")

It may seem odd that as the owner of a file we can remove our ability to read, write and execute that file but there are valid reasons we may wish to do this. Maybe we have a file with data in it we wish not to accidentally change for instance. While we may remove these permissions, we may not remove our ability to set those permissions and as such we always have control over every file under our ownership.