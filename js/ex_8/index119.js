const data = [42, true, function() {return 'the meaning of life is:'}];
if (data[1] == true) {
    console.log(data[2].call() or apply() example he showed+data[0]);
}