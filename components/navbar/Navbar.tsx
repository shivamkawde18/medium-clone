import {
  Box,
  EditIcon,
  HStack,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SearchIcon,
} from "@gluestack-ui/themed";
import React, { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DataStore } from "@/app/layout";
import { MY_FEEDS, getCurrentUserBlogs } from "@/app/utils";
export const Navbar = () => {
  const dataBase = useContext(DataStore);
  const router = useRouter();
  const boder = {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // padding: 40,
    borderLeftColor: "#ebebeb",
    borderRightColor: "#ebebeb",
    borderTopColor: "#ebebeb",
    borderBottomColor: "#ebebeb",
    // width: 500,
  };

  const getFeedsByInputOnHome = (text: string) => {
    const searchData = MY_FEEDS.filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase.setMyfeeds(searchData);
  };
  const getFeedsByInputOnMyBlogs = (text: string) => {
    const searchData = getCurrentUserBlogs().filter(
      (blog: any) =>
        blog.tag.toLowerCase().includes(text.toLowerCase()) ||
        blog.desc.toLowerCase().includes(text.toLowerCase()) ||
        blog.title.toLowerCase().includes(text.toLowerCase())
    );
    dataBase.setCurrentUserBlogs(searchData);
  };
  const pathName = usePathname();
  return (
    <Box {...boder}>
      <HStack justifyContent="space-between" alignItems="center" p={10}>
        <HStack>
          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <Image
              height={50}
              width={50}
              source={{
                uri: "https://www.svgrepo.com/show/354057/medium-icon.svg",
              }}
            />
          </Pressable>
        </HStack>
        <HStack alignItems="center" space="md">
          <Input
            padding={10}
            variant="rounded"
            borderColor="#F2F2F2"
            shadowColor="#242424"
            backgroundColor="#F2F2F2"
          >
            <InputField
              placeholder="Search"
              fontWeight="$normal"
              fontSize={"$sm"}
              onChange={(e) => {
                console.log(e.currentTarget.value);
                const text = e.currentTarget.value;
                // const searchData = MY_FEEDS.filter(
                //   (blog: any) =>
                //     blog.tag.toLowerCase().includes(text.toLowerCase()) ||
                //     blog.desc.toLowerCase().includes(text.toLowerCase()) ||
                //     blog.title.toLowerCase().includes(text.toLowerCase())
                // );
                // dataBase.setMyfeeds(searchData);

                pathName === "/"
                  ? getFeedsByInputOnHome(text)
                  : getFeedsByInputOnMyBlogs(text);
              }}
            />
            <InputSlot>
              <InputIcon>
                {" "}
                <Icon as={SearchIcon} />
              </InputIcon>
            </InputSlot>
          </Input>
          <Pressable
            onPress={() => {
              router.push("/create-blog");
            }}
          >
            <Icon as={EditIcon} w="$7" h="$7" />
          </Pressable>

          <Pressable
            onPress={() => {
              router.push("/my-blog");
            }}
          >
            <Image
              height={40}
              width={60}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/004/911/390/original/book-icon-template-black-color-editable-book-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
              }}
            ></Image>
          </Pressable>
          <Pressable
            onPress={() => {
              localStorage.removeItem("username");
              router.push("/login");
            }}
          >
            <Image
              height={30}
              width={30}
              source={{
                uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8BAQH7+/sAAAD+/v4CAgL8/Pz9/f3X19f4+Phubm7x8fHi4uKKiop0dHTCwsKenp5BQUHLy8smJiZ6enqmpqbz8/Pa2tqsrKxhYWEXFxdVVVXg4ODq6uqYmJigoKC2trYtLS1XV1d/f38iIiIRERHHx8ePj480NDRnZ2dMTEw+Pj6FhYUsLCy0tLSI2j79AAAcIklEQVR4nMVd6WLqKhCmEpO4Je5b1drFaq2n7/94lzVhBkhItL3+OMe2BPiYYVaYkJiIT9xJ5JdOJxL/R52O/EXSwU1i1SSkrdUk0k0e3LZimvcAJHVtO2AU5ydg6OSetW3+ZKO2skVvOP3M14fRe5Z9fX1l2fvosM4/02HPRProoXWTewCSurYkXh1f+t9b6vtsv/vj40o9/TsU7Dh/HfRkBUD+7yAdZzMDzBP/dLtPxf/G32bZeLr3dXcnwE5DgAGjsM8+v10duIwv4Bey6fU95yixbGkFMEYAH7oHyfQ8keBsXBig0USinJynDwYY3UN7R9tO3te0c+ByU7D8Ih/NciaA4kdoKDXNx+3B3mcWwpkuCpZfRA/9fGlRsP00H7MHCUlvXK5UEA5/8f+Fy573lDyERYvPXQBZ6x+x96oI52VRFyl5Z9/rQnTdpc2Cn/SzKNmfFXOGULCKRc2/8C5He/ekG02zxdKgtqu52nuVVGkAsPjCd2R6t0V5L8D0S8uWJhQMJTLre5MqTmk5zTjsSR+L7p4LfHcS7snzG9b/8yoUoGea7Z8c9kt81RLEY5YGQWbtvoa/DNDNor2RIT29bKewfEw2/fnofBgv1ovx4TyaZ5vJR2Gx1vPqSCnINjupLcD1tpoGyg6j37dFPlz2bDcxWQ6G+WJ0NSxzLzszL2TdFiBpQ/uErF7h2uOp8TmfJod8r/FE9oy0utvn4+sWMq1rvS5pW20WvjS6rWTQSvuyu1mk3L9NAsIQ/BdxuticsNYBXzir9sjvAlQzisnnK9DvT2gi9N8tH6h+w+MsjJbTkXAo/Qv3Lw+fZgGpMUDSmXsNGLGhbqlmvxYBqnR0on5SUjqP6qZpDR02EcPIS2d4AuX4zAaZCiqbk24WKWP+ZXby7gFmkqeOLV3j9DQy06ODIx6hN99ksQej2ABJHUDhTQzWE8OQwObqQQnH4NBRI4CDZ8v9K/BtphWjqE9vP1wN937dVrhL042PVyl9W9ZME/XbhEXTrQYIhQz3zIewc0zB/fHwplU847W3w7FQJK6QBXsg8/DqE92mldO0Ag/hANfYxpZf2EzmQ9S5AZBRLn93BRS379KV98Vk9u8uXhXyeq2UTAhAvIwVLDovAII9yPDtiBcgI3z2YWrz8gs3CjJGDv/Qu8y9KdiQevJhwb8ggPGzy0tis7zuSOLXtseJtFZ8Wpx+/xRzsIaOyPAZPl0sznN8J0CL9oMPTMGnrlLCkUe3cXwfyOJ0xWROuW9t+b+fF8N/MTTTx941TYfcrKWg/J/JGLSM0icaRxUZo/Qa4hxzNkjLfWVRJRlTl4aipzQsvFEHUH6ZWn4ul2n0OnQuo+rujGfm85K4yanZ2mUlDp9dViKlU1LLogJSAAU/HQApl2gVfDL8ttm6glcvQw9A0d2PYa4am/GznoJOgNakc0ekghFw4Fo9TcEjbQBQsOrRD5CJgaujO0rzAIAVslqPcrS0Eu/84JpIAfDg1mQOFtVfeI+JVzKS5ICMDSmLjwFBilqANgVZz6fUSW09ytyQf2EAhZJTaFyTTpRBBXvhVKwPUsCfrEk7hAwzDXuVFOwHUdBWcn0vQGFfPtu+o2LUhwM8uyeiAWYFATEFzZiMTUpm3VYAJEI64365RG0C0GLR1N6Detm8AM/FUltJJWaMzrYlSrwGYu0qXCu9Y2C/NfGbaoD7k2PRUje19Sg/Nosq73iRDpaduNNbTtd9jRIb8T/V+yq1TUB62lc6SKSKRTsf1mTpZV9NwdRBHuX8k8hgnHTuCkfq9fNSZX+xMlz0Q8cqPZqvwpt4tln02qsGGH1YALnJMnBMuvfisHXpR1QFkD11tVf9uS3AOTYrqe7Lb/HO7fFpf++eNFkqww7sq3klQPanqyWqpJ7x2S4NHF5KN3UAp5gqVAk7Z8gi4kyH9pUwN6v31RfOBAgD0muc+UMWlkfv1VeFsd25WACvA9gWe/TvWMnRSxxXAORD9810sxwmtY2zmmNfZLBFk+1iCjr8wQXyJgolXhF0ekFkp3RBfAD1NDdY9dPtgKC2dQCjZ0RBJmRQE4tFo94JuUtShVcCjLV6KR86JTUASXKleKQ3D8DIM2mC46JPGKArJjOGq0Lplw8gmPQC7Sv64m5bTjMhVySimDPuBtgBS1MC1Juw7OFSoyZ4VA0T45l42wKq3OAxDkprAPL43QXlvoQm9QTVHW51Z4biopTu7VEwwByuKzc2AijIP1cKxWleH3jYW9JmFiWhADtaq4WbamJGzxCgsl9rKSinWwIUxA8IHWEznGlFp2Jw5Qc/MbvVGdsC4BCmpNQmrBIyxdBMoJq7ntIdzk04REVuCe4ck0q0tSmY9F4BwG6tuyRnv6Bw6w+CAbImF2CGa4VRlXyJlTNlBB5enW6rI24wwnLq2bOMcPYb4ILTUTjASIZKjBE3XoDm7N+MEUXwb+Sapj3pFXJr6LbjAQiSLwMgEKVoCgZIkgt8ekAqWVTx3wlG4ChdOUI89pMXBJCCmIw3uzQFvpDHgPafNhxTUzJyYzYgu4SlDb1Y7iXU+PIYial/66NqxewPFDDMtBlAJaf07mCDBuXoD1AmyhgunKb1ZG8LI1rSlglIEPRNv4l+NAPIJvJtaihmz4YkQLltA0XGVhsmJh3gpEfQVpA7op6ChHwAGmQhih4MfTCpwRzhsPzgAIUYhbCJqgAOYWiBB06CACYR0E706BJIBUCX6TE1qSEMtwCAfFMh93JoAwSz/4K5TKEo6qQon3S8hzp7F4VQ0Bx6AES/1KYh+UEU1eD8DacJn1zBDAhfkZA9yFzWFDAZbXFvAgxNq4Pqxu7YUY89BDW+/ukZmcAvQSzKyfMJmOxEGgMk/8wYlsgrha3tGBn8GzRN8GQKg7n0tSoBCvkvNyUU/W4OsGA3OXQexKJ86OgVmYsrP0AzOvAkhwlaRj77I7XtvCYAEwKiCkxUBZ/Qz2EwSxDR6Nf8aQVNBO7EBFKQD2NaXc+uJtVU0TRU2yknoWtru5cr4LaafJJBgHToP4RgjZKbowgzIVRN6O4u5pkGhjAYYEkZJU7nBAxdAtwjqTS3jTwvQKnOimWcNaVgTAgw+FWUtZ5F+RdNmkKc7iOjrcGwZyx2vedkHKHoHZATtMqj90waWCd0GAyQ/WWIxOnZbGsYeTD6xEgYTsFOHAEbmO6TCgo61ysFAGnw2oo1mCNxarYtd/oPMtPxrc7K86KaycptVCyca0aOSa+hg9gIIIxLMTnwY7YtnpyA00s6mBs8yjNQiCMLYJ3o3wCT5rmyrb1eGXQvJy6AKdzp5UYIXMaRadEyV7QhwM4WiKpRk6FJabtpObAiFkDyDll5AzuvP9J8hFy2agawPPIhp3hsBJCZ+RsoJm/FIZPiyd4MGCXoAEDAme09BUQ4NwOoZ6hpsG/CorzJFMqB2VK3LZ78NPYqQzhRXQQvI+l9A6tr1vMfxqv1EOgkicMBymlOTB6Ulrtqq57MoOe7Js0oyPjkBvlkQcIBWjr7RpqwqGiyBudQpaA0AXZAopJ2B00BdrSo0nyiIiZBAKMV0MWUpsjHqwdIBl3gfdGObquezKHx2ieVHr17FOTF3IIBaqu7WJ3XxhQkKBTGNTI81wYjZVzONBJloskB8gndBQNcQ/LLAGaDPcjbFmcIFB9kRbROfpA6aUFBGfUu+YQLm0CAO2RWUl/uv/pWEThwzU1jE+AUirJRG4AmI8hB+rp8SzXA5SsKematAEpRVy6T9k7Ek9itSKMWGyFJdsh2L85TVgK0orrSnGrEorbt3tUJMzXKBDgG//Ttx6aXszJg2napMk8rAUZv8KGuXJfGFGSfGdAHk2IN2Ch7uNNvpB1A2Q9IX8zrAC4RBb1Zq3qAWiM/KX2xV235k7mZjSlOiLe4XnegON/1tq86bcgv+2GAh7YAixP3SlzmJUBoddNTc1FWNHmFEWh+6qtYL9w20UeMgGt3CRvaoc1idVjUMIx4W/HkFfjX2q1oTEFiRaDFZty42Y6Jhm8bIBczrSjI7fwN0BfXWC8kTt8umgI0Y3cvjkmLu20JBphuHCcT+eAtAcboKIFWq2Is6NqlbSkomvThASfFqs9rFRSJZS/78p4oNhfbAxQxewNJUVLDzDCzZTx1Wu5B6Q92vh11aviZ58vtZzocdJbD6c/7pTjqDXNj352We1C27YHEvjgIpoMc5ijXlhTUDu/SPjvdtUtjOJo80Y/lPRQkKNXGbSNlusxQCv0ugOX5d5uU5fEAJ8DT/k6AKpGskfzTGj+GRmlO2rMokQbEFksQ/MUJcBsEsMrpERmwEgmVQYwOcz/N4cpgbkuArMng4jiHbwOE+fTL4E4KCuPMHEg60uyBY036tjFAwgNLzp3mpSDTmvHdABOVGijk21E8GsljcwVudVK2uZowARL7CK6LcAbAw11qomg7AbaLOIobIQ1WRqvvoCCPjaQnePS3AqC8C3fnHpRtR0Ah6rj9N4iULh5AQdnkZl5v8rMorxZS3W94npZZNSZnqGQ72QLcefNRfGHD3QbrdactsNk9DKAWplo6S2OxB8IrwsG+l4KqbUTSN1A8yL5VydyrtKbfkOM8vjSmrNkzNMUepcu79yBou7sZJgygoPi9qsfwkD3It//STGPyJC9vAm7y0I/eQwGyT++4kTU/gGzhdxE3x179pBuwKGvS+zAUg4xGRcgznkT+CjetAPJVXKaHr3/ALH39Ok8L5+ZhACOSmOkL6X13kKWz8V8gagdQt+3td/l6fGCfRb4biDJZTZMvIW3fgGLIBcI1MGn61u3uxwCMdei0+DQPqoc4PRnYDPJA7QEEUnWIs5maCJe4zanSCCCZA4Uo0wMjl0lzn5p4TNs2AMuIYpEsF4E2g3PP4aP8EcBG1NbReyU338WeMzlX0fXRe/CvWDTSh6mNBBThhrdp0rw0Btjabv0FgB11Q7CUm7zJl5kx4ob3b1GwaBuHA2ycBFsAucnvXkUFQqkP148HqNWE/j9O0JfHUVCk8w25yRF2dNZP0XURUMO80TESrutXP4fR1/VV1zTtvl6/RoefdN97OEBOQ0Nu8mx9rBBqzh3X1zBvAnCXjzavjmJtynbb3PJhsRKPAEhegNyUF60zwLkqhf4IgMtjpsE5A28aZnYcOCfdSiAdSqe7OJz3bub8NML7JCNrMRx/G6HfisiiaHQZ60Ov91GQFPrwSelD/hmZgT+VHb3LVCNk/3IFnm9N6FSAnLzU1BQJ8urguSVm0/BHDsCSmzenIAaYb5ylWbwAC1JuPst+2wFEV5gZR2r5WgwrOPcuU219cSWVPLiw0/+60MvUZg/yJuAoAS8hSczgzZO8cXKHkOm9eEIWAbyqCDletqdgrM44Ft1x/zCBN7crTwXWAewdTs4KSnVfYGz4NO41tmSKJpEZEpZRDH3iTnPudhm3BfjzgasAuDmzJkhclCdvzqLygmixcDLZq+7Rl6GNga/zGoApLDXjnn0AQMGrl7QVBZkONs9Y6qPcPddFh2YAY7LMqAtgQIbNHean2bINQLKHt5FVLG8LTgfnNezhAJiQHBTECyJc9X5lrHq0DjcE+ASfwKTZyl+Sb6AQX0hTNaHqGlWynftTRWRKv6LGAHX5CbVM30Sea4NnS9+bmmok7aJTI5AY7HO6bEY/+XS1X3ZIZznYTfOf0eZyMqPhNlK2o9KGAGNk0mRqmmOEu5FHH6s7nB7Rz6yx/jrV0ks7hvLZQfqTTapIycvqNItPw8PGjB9521jlgMvkd6PkS+8LHFxFdlh/vdeo3L5jsi/r79l8wDhVv0EwMFoCjyAe+VrGvBAG4H99UzhEispyZA6AwszMOyQkZNE5FoasvRkve9C2BuAAZrnldenEmfwOBKi2IJYtbL7fi4FqWweQm//LBfe1XIJWae3AeFcOjwnLFkScpzE2+CgcIC6Coy+f0jd9dy08xFiU0rdcqzxsD/ImY4DkH9EfGOufBAM8IidCO3tvTd7RVHj0jqN8ihTHwKLPPC/jSuPjc238NkmIkCnKDqIlv6549le1JaEApeU3cSWMi4oltQCTredcG7zDKwoXBlDQBVC+KeWOOEv+Dxe4EppxXQ1QTxMUlFW1W8Xf4RVneg4oEB0VlViBHchLj9+VfNFv6YH6NazoswoHlw/pQ1YdrCefSRMhYwKcre7OYxRvWjLmKrO59W4ruuJ3Vf3yUW5AT+obwFUUnNos6ilE1SI3MbIrsNcWp+W/0dUs1arcSoCCIIaUPdZRMEJX9wXbi3ccPCb5knfxZlSXFCotSr3smuy5NLvFKLBEn5SyFQDj3gWzKLM/9862rZIvZD9xHOKPanwCkes1rI6h/IscZWIez6I0qXGXvqAw4AC/PJNum136woFyMUS1yQzuT6lrsPpzNoXQk6jMWAFwjG1RVZXvoQlQazNyT6MS4Apan2cDHxYc1ZW2itCVQcGFp217gHZx2vI6mscegQcSVONEd47u7um5ukIWSRcZ2/LNDQ9Pd1vFabv0FIMmiNG68Da6aqI7z6C+OFoAy5X+sih4DJ10o/SZMiqAtOk7u5PTnFLbKJUxVDGKWQRJV9BxU+WIK05Ck+phAHnbNcW1yo5+nyCDpTFyCNC8y/2kbh+5AS63MOhE9emNh+5B3Ra/CYRuB76iKYMT8B/4XW7ZnR4Flc44+yY9R1E1maJro+hD2hZ14YsNpM9sWcJ+bSo8odNVd0VKDCRU6KznfiXKFB3epm9NJ90oPxiTN7jrtfVmW5QTk9rcjjXDQazzeAmLI9Mft9d5AfuVGRpL0o6Codml5Sta0otsiwF+YgrZxU3eYTzqQlwzWlN0535FHq8mYNsVLoX946IgdCuE1Y0BSj1uTH5qjFKkz7YIYOUrnx5AQUKMNxgog2vrqCkSDaHJQlP9Jk1Tg05AAMFZ5WeM6kZu/gBghMlTHogxikn3gUBiNmnRndH5DyoKmVozWp5AfpB2l7+mJkwjavkEN5C6p2wMrUlYNNEJSNFdOQqq67axZjRGa3D87T2omhxhYkuW0AfybQ4BUjMJYThluF6bLrugJ5KguhebP2BR2XaDtn+EAO5g7ku7FbI7I6sB6w7Yhf8XIEdvVjr6ZYA8TQ3WdoE0VB9OnIJMgNk5vKSsbtKXYbDy9qvoZ/QHe1APPYJDz+DQKTRDVCS4NIzkKPwnrHo+wChIp9IoaUHBVtRO4g6qQfQJ7JEJoszKB9B6uwnjBuM81cYEyMXVH7GoaLKAfKjqzMq2R2T1fPkBGm/PUXQaJHqUBApk+tELqT3zKIDytg8OvMm20AzpajtLdwcAxroObCF2dW4jKV/QoP7yEpwtuZdFZZMX45xMV708QbYdOUrQmhE4YMXqWqdWsIM1AWUVy3fz/AWL8s8SVh2cFG1TbLcOcXfQTEc1H+i/RI0C3s9BixI2fwXQvCoiJjDUbVEJBx7oqAIoNA944KZGGcPsapMCqo8AGGM5MFaC7gAPmvGZIc8Dm+kjJE7127AuYKf7Xo30O3tQ0uEKtslFyoEdtAWkloaQYvCTwe96sWZL/pcBOPFbvHem+aTbF02BSkGev+sUFX9s16pMLgOAujqcYeQJeYpqd0Z/ClDupARGC4/8L++Y437sV+UhgB39jhIUDu2DUFw/YMnBKPdTEMxBh07xe275O0rQroswwEhWx4byd2/apF119PZvWZR/jkBfzEDJVAmQufbW2toAYV0C8eC/GBSxFfe9/5hF+ZcBLOU1TF4xwFHtO63kl94/c7H4k31wcIZHEP9OTRj2iBlZZIyUodQNfV1Gum0lQDtHT+nMtOb4Gf+/UhNA9B9AcmWGjswX7+xCkJw+HgwKPHWtQNaf70ExzRQm43HyDVdpVGvrHmUGHRLI7id93vDv9qCkw+DkKLJV0jR2AvTcVEsrTt0X6eM/piDhrq4NsNhJKWyLFKI1ytg6mlS6n95Xb/7mHhSfjPoBji2ABj7HkjO5Rd0Au6Jo/f9BwTK/ZPMql+/utfWNEvV89bqeat9m/it7kLctrvc8oVl16XaJ2hZD+0eBeQzTKB2GAXyMqQYmjd5j4ci5WYohrhhlbZ+9kjZbGMBHs6ho6z71ro9nera/f5Q51jjKZvt/WFR8cV480ldFPUP7R4niN3w6T9hsl/+NgrwArEMyKCnji09XjKJeBY/6ZP7936sJ3fZKMQWZYJglqC0cunIUZkRYbF9WsPlLCsr/jfoPJQXla4f9a1s9SkotK4JuvWevfncPss/Ueh06fomoLcDrltF64X1x6vrP96CR7y5lvIroVuSI6kax3n4spGn2f+xBQ7ZjgFVD108kt3UQpa+7Mpf+RxQcXlwA84C1rR3lSG0RXVyB+LM9+EOxkHEdimwFEES0jM24Wbom/Uss2uk755A7FwP1G6DbYM26YjPy/v+IRXPqBPgZtLZBynuKLF7FqV/q2sIvs+igb+usKiGDhw5axnRLbZ+FqtPPv0zBdZdalgxX9KmjravfsFHIQFfERn7G97R2pwcCdL9VnqyujoAKz0EP7LZNAFq0J703x2YUV/F2BHX+QFNt33ddvGTDPsfOaTr6DRhFPpmQd3AsxxjtHd5medQeTMjg7CxPxLgWukuVzFMH0JzR2nU5UBRAeN8/3KNPyPLgqbWslXHocZ4G5le6dUfgOEZd0OpRQSdJP2dUbZtWT7M9QDbsG7ZSteJgFkDbYh0ugKu5dbu7APi29E3TPXQoixJpxY599QHYhK7rAYkesAd7+Zu3gpY/LupduCYAedt05g5QCUKesnDf0UfB1XnmK0DAU0S+yHZFv+6JVCzN3F+ijLPWTRxJagGQv5t3P/5HXRaaSgnReQszuDHAhHy+esKW0lyl/26fA0+/FSzKyymLKhm+5Avz2fAt/xABDn8KpH3vXDERAXK7eUkNm6Kegruf/j9vERDV621ZzDecRTs+gKT6ydWF2v6oEfgXJVuuh1y9OSr2dcc/vc+FKvjtZn0F8JLqk3TNrETSjEVL2q+3lTN60mV3rrdFPlz2tJozPr3lfroYvRXFeDx7W0ahtz/EPoQQaGO0oKBoIi/OewGWzCW4drLJ5rfz4WWxXrwczrd5trl+VFYaMjiDX/Pvue58BkzTA7CeuUWTYUYtG8eVyylw2kWUqghXcnx/SJq8mBZN854wRPl6B2/C2E2V2raGnyteDnFPtOSuOEtEVl+QVytJ6YPsbcLxrdxDh9v5+tdNaV802c2pIwzmJ1w4QM6fKRi61TXH1gBL53h/0GbyQwhXGDB0hCootaKDe9LN0mfsFz8TQ3A0QerTDpR+rx8TVH8AQNlkdZtZUsf7pboJ62f2XpQpekD2/DE3X5hdOc2EDrhXtlCa5b3CDrqPRTHAYAr62nY+s1LTNUZKFTzeZUjoKHCaD77DyxzI8ySQlLZRMDlPa4ZuMc3HApTrtc9vV9sg87KoMmDfi+LlQcG/4GneoSaqDPN4kI4z8+U5Lh9Lf/5lY1FaMfF1d582a7s01aJM9ZseX/rfW49Zygzy7+zlqKXmY9bWmuYvAdSenPy/t5t+5uvD6D3rf331s+x9dFjnn+lQV338haFhlvs+NRGyjGZAAX7aZIObTbPtpO97YdCfXT5lTf4D6NnCqVrjb0sAAAAASUVORK5CYII=",
              }}
            ></Image>
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};
