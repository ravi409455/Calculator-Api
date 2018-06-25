function C (val)
{
    document.getElementById("display").value = val;
}

function math(val)
{
    document.getElementById("display").value += val;
}

function Cal()
{
    try
        {
            
            C(eval(document.getElementById("display").value));
        }
    catch(Cal)
        {
        C("Error");
        }
}