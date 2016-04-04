
# How to contribute to Fawkes

Rules for committers:

* Keep work branches in your own github fork, rebase at will
* Squash or rebase branches before merging to master so the commits make sense
  on their own
* Get a LGTM from someone relevant before merging
* Keep commits to master bisect safe (i.e. each commit should pass all tests)
* Sign-off commits before merging

## How to sign-off your commits

To help tracking who did what, we have a "sign-off" procedure on patches. This
avoids the need for physically signed "[Committers|Contributors] License
Agreements".

The sign-off is a simple line at the end of the commit message, which certifies
that you wrote it or otherwise have the right to pass it on as an open-source
patch. The rules are pretty simple: if you can certify the below:

    Developer's Certificate of Origin 1.1

    By making a contribution to this project, I certify that:

    (a) The contribution was created in whole or in part by me and I
        have the right to submit it under the open source license
        indicated in the file; or

    (b) The contribution is based upon previous work that, to the best
        of my knowledge, is covered under an appropriate open source
        license and I have the right under that license to submit that
        work with modifications, whether created in whole or in part
        by me, under the same open source license (unless I am
        permitted to submit under a different license), as indicated
        in the file; or

    (c) The contribution was provided directly to me by some other
        person who certified (a), (b) or (c) and I have not modified
        it.

    (d) I understand and agree that this project and the contribution
        are public and that a record of the contribution (including all
        personal information I submit with it, including my sign-off) is
        maintained indefinitely and may be redistributed consistent with
        this project or the open source license(s) involved.

then you just add a line saying

    Signed-off-by: Random J Developer <random@developer.example.org>

using your real name (sorry, no pseudonyms or anonymous contributions.)

If you're using the command line, you can get this done automatically with

    $ git commit --signoff

Some GUIs (e.g. SourceTree) have an option to automatically sign commits.

If you need to slightly modify patches you receive in order to merge them,
because the code is not exactly the same in your tree and the submitters'.
If you stick strictly to rule (c), you should ask the submitter to submit, but
this is a totally counter-productive waste of time and energy.
Rule (b) allows you to adjust the code, but then it is very impolite to change
one submitter's code and make them endorse your bugs. To solve this problem,
it is recommended that you add a line between the last Signed-off-by header and
yours, indicating the nature of your changes. While there is nothing mandatory
about this, it seems like prepending the description with your mail and/or name,
all enclosed in square brackets, is noticeable enough to make it obvious that
you are responsible for last-minute changes. Example :

    Signed-off-by: Random J Developer <random@developer.example.org>
    [lucky@maintainer.example.org: struct foo moved from foo.c to foo.h]
    Signed-off-by: Lucky K Maintainer <lucky@maintainer.example.org>

This practice is particularly helpful if you maintain a stable branch and
want at the same time to credit the author, track changes, merge the fix,
and protect the submitter from complaints. Note that under no circumstances
can you change the author's identity (the From header), as it is the one
which appears in the change-log.
