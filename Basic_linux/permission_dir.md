PERMISSIONS FOR DIRECTORIES
The same series of permissions may be used for directories but they have a slightly different behaviour.

*   r - you have the ability to read contents of the directory (ie do an ls)
*   w - you have the ability to write into the directory (ie create files and directories)
*   x - you have the ability to enter that directory (ie cd)

![Terminal-screenshot](dirpermission.png?raw=true "Title")

Note, on lines 5 and 14 above when we ran ls I included the -d option which stands for directory. Normally if we give ls an argument which is a directory it will list the contents of that directory. In this case however we are interested in the permissions of the directory directly and the -d option allows us to obtain that.

These permissions can seem a little confusing at first. What we need to remember is that these permissions are for the directory itself, not the files within. So, for example, you may have a directory which you don't have the read permission for. It may have files within it which you do have the read permission for. As long as you know the file exists and it's name you can still read the file.

![Terminal-screenshot](dirpermission2.png?raw=true "Title")