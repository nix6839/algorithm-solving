use std::io;

fn read_line() -> (i32, i32) {
    let mut line = String::new();
    io::stdin()
        .read_line(&mut line)
        .expect("Failed to read line");

    let mut nums = line
        .split_whitespace()
        .map(|el| el.parse::<i32>().expect("Failed to parse number"));
    match (nums.next(), nums.next()) {
        (Some(n1), Some(n2)) => (n1, n2),
        _ => panic!("Failed to read two numbers"),
    }
}

fn main() {
    let (n1, n2) = read_line();
    println!("{}", n1 + n2);
}
