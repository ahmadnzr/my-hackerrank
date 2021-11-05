
#case 1: print odd number 1 to 99
for ((i = 1; i <= 100; i+=2));do
    echo $i
done

#case 2: print number 1 to 50
for i in {1..50}
do
    echo $i
done

#case 3: basic arithmatic
read x
read y

let sum=x+y dif=x-y prod=x*y quo=x/y

echo $sum
echo $dif
echo $prod
echo $quo

#case 4: comparing number
read x
read y

if ((x > y));then
    echo "X is greater than Y"
elif ((x < y));then
    echo "X is less than Y"
else
    echo "X is equal to Y"
fi

#case 5: conditional 1
read c

if [[ "$c" == "y" || "$c" == "Y" ]];then
    echo "YES"
elif [[ "$c" == "n" || "$c" == "N" ]];then
    echo "NO"
fi
