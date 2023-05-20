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

                                Terminal
1.user@bash: ls -l /home/canice/pick.jpg
2.-rwxr----x 1 canice users 2.7
3.                                


![Terminal-screenshot](terminalpic.png?raw=true "Title")