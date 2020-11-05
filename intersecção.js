function FindIntersection(strArr) {


    console.log(`${strArr}\n`);

    var array_1 = [];

    //Organizando meu array:

    // 1 - concatenando todo meu array
    strArr = strArr.toString();

    // 2 - separando minhas strs
    strArr = strArr.split(",")

    //fazer a varredura do array
    for (var index = 0; index < strArr.length; index++) {

        // 3 - tirando os espaçamentos 
        strArr[index] = strArr[index].trim();

        console.log(` strArr p [${index}] = ${strArr[index]}`);

    }



    console.log(` \n strArr depois da org = ${ strArr} \n tamanho do strArr ${strArr.length}`)




    for (var index_i = 0, aux = 0; index_i < strArr.length; index_i++) {

        for (var index_j = index_i + 1; index_j < strArr.length; index_j++) {

            //O q esta sendo comparado
            console.log(` index_i p ${index_i} = ${strArr[index_i]} == indes_j p ${index_j} = ${strArr[index_j]}`);

            if (strArr[index_i] === strArr[index_j] && strArr[index_i] != "") {

                array_1[aux] = strArr[index_i];

                console.log(` array_1 p ${aux} = ${array_1[aux]}`)

                aux++;

                break;


            }
        }

    }


    console.log(`\n Arrai_1 = ${array_1}`)
    return strArr;

}

var array = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];


FindIntersection(array);