#include<stdio.h>

int add(int x,int y);
int main(){
    int x = 5,y=9;
    int resultat = add(x,y);
    printf("resultat de %d + %d est %d",x,y,resultat);
    return 0;
}

int add(int x,int y){
    return x+y;
}

