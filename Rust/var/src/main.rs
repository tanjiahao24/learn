fn main() {
    // let mut str = "React";
    // str = "Vue";
    // println!("{}", str);

    let num: u8 = 255;
    let res1 = num.wrapping_add(12);

    println!("{}", res1);

    let res2 = num.checked_add(11).is_none();
    println!("{}", res2);
}
