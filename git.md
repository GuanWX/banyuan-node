## git
[猴子都能懂的git教学](https://backlog.com/git-tutorial/cn/)
### git 构成
+ workspace
+ staged(暂存)
+ repository(本地)
+ remote
### git 命令
+ git add 将workspace的文件添加到staged
+ git commit -m "message" 将staged的文件保存到repository
+ git push 将repository的文件上传到remote
+ git pull 将remote的文件拉取到repository
+ git stauts 查看当前git的状态
+ git checkout file/directory 恢复文件或者文件夹
+ git remote -v 查看已经配置的remote信息
### .gitignore
git忽略文件配置
```
.DS_Store
*.sw
```
### git分支
git的主分支一般比较重要稳定，通常不随意修改，但是可以创建自己的分支，在自己的分支上进行修改，修改稳定后，可以将修改的部分合并到主分支上。
+ git branch branchname 创建分支
+ git checkout -b branchname remotename/repository 创建分支
+ git checkout branchname 切换分支
+ git branch -a 查看分支
