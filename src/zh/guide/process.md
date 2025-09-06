# 云处理 {#process}

云处理功能是一个通过 url 参数实时修改图片样式并输出的功能，支持任何已适配的储存。处理后的图片会自动缓存在本地服务器中，并支持两种输出响应方式(流输出、X-Sendfile)。

流输出是通过程序加载缓存文件到内存中，然后通过程序输出到客户端，对服务器有着较高的 I/O 性能要求。

X-Sendfile 是通过输出特定的 Header 告诉 Web 服务器文件所在位置，然后通过服务器内部重定向，将文件直接输出给客户端，推荐使用该方式(当前仅支持 Nginx，需配置伪静态使用)。

## 如何使用云处理 {#usage}

要使用云处理，需要先创建云处理驱动器，设置一个文件缓存目录后，将任意一个储存关联该云处理驱动器即可，该储存中的图片都可以使用云处理。

## 使用 X-Sendfile {#x-sendfile}

使用 X-Sendfile 能够极大的提高图片访问速度，当前仅支持 Nginx，并且 nginx 需要安装 `ngx_http_sendfile_module` 模块。

编辑云处理驱动器配置，修改「云处理文件输出方式」为 X-Sendfile 后，页面会显示 Nginx 配置，我们将该配置信息，复制到站点伪静态配置结尾，或者复制到 nginx 配置中即可。

注意，如果配置后未生效，您可能还需要删除 nginx 类似这种配置：

```nginx configuration
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
{
    expires 30d;
}
```

## 预设版本和支持参数 {#preset-and-parameters}

### 预设版本 {#preset}

通过预设一个或多个不同的版本，通过预设来处理不同的图片样式。例如我们预设一个名称为 `small` 的版本，其中自定义参数设置了 `w` 为 200，`h` 为 400，即图片的宽高设置为 200x400。然后我们就可以通过图片的 url 参数定义 `kayaks.jpg?p=small` 使这个图片应用这个预设。

我们还可以通过逗号分隔，来按顺序应用多个预设，例如：`kayaks.jpg?p=small,rotate,zoom`。

### 支持参数 {#parameters}

支持参数是自定义程序更高的一种配置，提供更细粒度的样式控制，用户可以通过选择的支持参数自由的控制图片样式，例如我们在「支持参数」功能中允许了 `w` 参数，任何访客或用户都可以在 url 上追加 `w` 参数来控制图片宽度：`kayaks.jpg?w=1000`

::: danger 请谨慎选择支持参数
配置云处理时推荐仅使用「预设版本」，而「支持参数」中默认都是未选择的，如果选择了，容易受到大规模图像调整大小攻击，比如使用随机参数请求图片，会造成系统频繁的处理图片，占用系统资源。
:::

## 处理规则 {#rules}

| 名称     | 功能          | 描述            |                  |
|--------|-------------|---------------|------------------|
| 方向     | `or`        | 旋转图像。         | [信息](#or)        |
| 翻转     | `flip`      | 翻转图像。         | [信息](#flip)      |
| 裁剪     | `crop`      | 裁剪图像到指定尺寸。    | [信息](#crop)      |
| 宽度     | `w`         | 设置图像的宽度（像素）。  | [信息](#w)         |
| 高度     | `h`         | 设置图像的高度（像素）。  | [信息](#h)         |
| 适配     | `fit`       | 设置图像如何适配目标尺寸。 | [信息](#fit)       |
| 设备像素比  | `dpr`       | 按比例调整图像大小。    | [信息](#dpr)       |
| 亮度     | `bri`       | 调整图像亮度。       | [信息](#bri)       |
| 对比度    | `con`       | 调整图像对比度。      | [信息](#con)       |
| 伽马     | `gam`       | 调整图像伽马值。      | [信息](#gam)       |
| 锐化     | `sharp`     | 锐化图像。         | [信息](#sharp)     |
| 模糊     | `blur`      | 为图像添加模糊效果。    | [信息](#blur)      |
| 像素化    | `pixel`     | 为图像添加像素化效果。   | [信息](#pixel)     |
| 滤镜     | `filt`      | 为图像应用滤镜效果。    | [信息](#filt)      |
| 背景色    | `bg`        | 设置图像的背景颜色。    | [信息](#bg)        |
| 边框     | `border`    | 为图像添加边框。      | [信息](#border)    |
| 质量     | `q`         | 设置图像的质量。      | [信息](#q)         |
| 格式     | `fm`        | 将图像编码为指定格式。   | [信息](#fm)        |

以下是您提供的英文部分翻译成中文的内容：

### 方向 {#or}

旋转图像。接受 `auto`、`0`、`90`、`180` 或 `270`。默认值为 `auto`。`auto` 选项使用 Exif 数据自动正确地定向图像。

```html
<img src="kayaks.jpg?h=500&or=90">
```

### 翻转 {#flip}

翻转图像。接受 `v`、`h` 和 `both`。

```html
<img src="kayaks.jpg?h=500&flip=v">
```

### 裁剪 {#crop}

调整图像大小以填充宽度和高度边界，并裁剪任何多余的图像数据。生成的图像将匹配宽度和高度约束，而不会扭曲图像。

~~~ html
<img src="kayaks.jpg?w=300&h=300&fit=crop">
~~~

#### 裁剪位置 {#crop-position}

您还可以通过添加裁剪位置来设置图像的裁剪位置。接受 `crop-top-left`、`crop-top`、`crop-top-right`、`crop-left`、`crop-center`、`crop-right`、`crop-bottom-left`、`crop-bottom` 或 `crop-bottom-right`。默认值为 `crop-center`，与 `crop` 相同。

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop-left">
```

#### 裁剪焦点 {#crop-focus}

除了裁剪位置，您还可以更具体地指定确切的裁剪位置，使用焦点。这是使用两个偏移百分比定义的：`crop-x%-y%`。

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop-25-75">
```

您还可以选择通过提供第三个值来放大焦点：一个介于 1 和 100 之间的浮点数。每一个完整的步骤相当于 100% 的放大（例如，`x%-y%-2` 相当于以 200% 的比例查看图像）。建议范围为 1-10。

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop-25-75-2">
```

#### 裁剪 `crop` {#crop-crop}

在任何其他调整大小操作之前，将图像裁剪到特定尺寸。所需格式：`width,height,x,y`。

```html
<img src="kayaks.jpg?crop=100,100,915,155">
```

### 宽度 {#w}

设置图像的宽度，以像素为单位。

```html
<img src="kayaks.jpg?w=500">
```

### 高度 {#h}

设置图像的高度，以像素为单位。

```html
<img src="kayaks.jpg?h=333">
```

### 适配 {#fit}

设置图像如何适配目标尺寸。

#### 接受： {#fit-accepts}

- `contain`：默认值。调整图像大小以适应宽度和高度边界，而不会裁剪、扭曲或改变纵横比。
- `max`：调整图像大小以适应宽度和高度边界，而不会裁剪、扭曲或改变纵横比，并且如果图像小于输出尺寸，也不会增加图像大小。
- `fill`：调整图像大小以适应宽度和高度边界，而不会裁剪或扭曲图像，剩余空间用背景颜色填充。生成的图像将匹配约束尺寸。
- `fill-max`：调整图像大小以适应宽度和高度边界，而不会裁剪，但如果图像较小，则会放大图像。完成的图像将在宽度或高度上有剩余空间（除非新图像的纵横比与旧图像相同）。剩余空间将用背景颜色填充。生成的图像将匹配约束尺寸。
- `stretch`：拉伸图像以精确适应约束尺寸。生成的图像将填充尺寸，并且不会保持输入图像的纵横比。
- `crop`：调整图像大小以填充宽度和高度边界，并裁剪任何多余的图像数据。生成的图像将匹配宽度和高度约束，而不会扭曲图像。有关更多信息，请参见 [crop](#crop)。

```html
<img src="kayaks.jpg?w=300&h=300&fit=stretch">
```

### 设备像素比 {#dpr}

设备像素比用于轻松在 CSS 像素和设备像素之间转换。这使得在各种设备上以正确的像素密度显示图像成为可能，例如带有 Retina 显示屏的 Apple 设备和 Android 设备。您必须指定宽度、高度或两者之一才能使此参数生效。默认值为 1。dpr 的最大值为 8。

```html
<img src="kayaks.jpg?w=250&dpr=2">
```

### 亮度 {#bri}

调整图像亮度。使用 `-100` 到 `+100` 之间的值，其中 `0` 表示不变。

```html
<img src="kayaks.jpg?w=500&bri=-25">
```

### 对比度 {#con}

调整图像对比度。使用 `-100` 到 `+100` 之间的值，其中 `0` 表示不变。

```html
<img src="kayaks.jpg?w=500&con=25">
```

### 伽马 {#gam}

调整图像伽马值。使用 `0.1` 到 `9.99` 之间的值。

```html
<img src="kayaks.jpg?w=500&gam=1.5">
```

### 锐化 {#sharp}

锐化图像。使用 `0` 到 `100` 之间的值。

```html
<img src="kayaks.jpg?w=500&sharp=15">
```

### 模糊 {#blur}

为图像添加模糊效果。使用 `0` 到 `100` 之间的值。

```html
<img src="kayaks.jpg?w=500&blur=5">
```

### 像素化 {#pixel}

为图像添加像素化效果。使用 `0` 到 `1000` 之间的值。

```html
<img src="kayaks.jpg?w=500&pixel=5">
```

### 滤镜 {#filt}

为图像应用滤镜效果。接受 `greyscale` 或 `sepia`。

```html
<img src="kayaks.jpg?w=500&filt=sepia">
```

### 背景色 {#bg}

设置图片的背景色。更多颜色格式信息请参阅[颜色](#colors)。

```html
<img src="logo.png?w=400&bg=black">
```

### 边框 {#border}

为图片添加边框。格式要求：`宽度,颜色,方式`。

```html
<img src="kayaks.jpg?w=500&border=10,5000,overlay">
```

#### 宽度 {#border-width}

设置边框宽度，单位为像素，也可使用[相对尺寸](#relative-dimensions)。

#### 颜色 {#border-color}

设置边框颜色。更多颜色格式信息请参阅[颜色](#colors)。

#### 方式 {#border-modes}

设置边框的显示方式。可用选项包括：

- `overlay`：边框叠加在图片上（默认）。
- `shrink`：图片在边框内缩小（画布大小不变）。
- `expand`：画布扩展以容纳边框。

```html
<img src="kayaks.jpg?w=500&border=10,FFCC33,expand">
```

### 质量 {#q}

定义图片的质量。取值范围为 `0` 至 `100`，默认值为 `90`。仅当格式设置为 `jpg`、`pjpg`、`webp` 或 `avif` 时有效。

```html
<img src="kayaks.jpg?w=500&q=25">
```

### 格式 {#fm}

将图片编码为特定格式。可选值为 `jpg`、`pjpg`（渐进式 jpeg）、`png`、`gif`、`webp` 或 `avif`。默认值为 `jpg`。

```html
<img src="kayaks.jpg?w=500&fm=gif">
```

## 相对尺寸 {#relative-dimensions}

相对尺寸允许您指定宽度或高度值作为主图像的百分比。这对水印和边框等功能很有帮助。

要使用相对维度，只需提供百分比作为数字（介于“0”和“100”之间），后跟“w”（宽度）或“h”（高度）。例如，“5w”表示主图像宽度的5%。

```html
<img src="kayaks.jpg?w=5w">
```

## 支持的颜色 {#colors}

支持多种颜色格式。除了所有现代浏览器支持的 140 种颜色名称（如下所列）之外，还接受十六进制 RGB 和 RBG alpha 格式。

### 十六进制 {#color-hexadecimal}

- 3 digit RGB: `CCC`
- 4 digit ARGB (alpha): `5CCC`
- 6 digit RGB: `CCCCCC`
- 8 digit ARGB (alpha): `55CCCCCC`

### 颜色名称 {#color-names}

- aliceblue
- antiquewhite
- aqua
- aquamarine
- azure
- beige
- bisque
- black
- blanchedalmond
- blue
- blueviolet
- brown
- burlywood
- cadetblue
- chartreuse
- chocolate
- coral
- cornflowerblue
- cornsilk
- crimson
- cyan
- darkblue
- darkcyan
- darkgoldenrod
- darkgray
- darkgreen
- darkkhaki
- darkmagenta
- darkolivegreen
- darkorange
- darkorchid
- darkred
- darksalmon
- darkseagreen
- darkslateblue
- darkslategray
- darkturquoise
- darkviolet
- deeppink
- deepskyblue
- dimgray
- dodgerblue
- firebrick
- floralwhite
- forestgreen
- fuchsia
- gainsboro
- ghostwhite
- gold
- goldenrod
- gray
- green
- greenyellow
- honeydew
- hotpink
- indianred
- indigo
- ivory
- khaki
- lavender
- lavenderblush
- lawngreen
- lemonchiffon
- lightblue
- lightcoral
- lightcyan
- lightgoldenrodyellow
- lightgray
- lightgreen
- lightpink
- lightsalmon
- lightseagreen
- lightskyblue
- lightslategray
- lightsteelblue
- lightyellow
- lime
- limegreen
- linen
- magenta
- maroon
- mediumaquamarine
- mediumblue
- mediumorchid
- mediumpurple
- mediumseagreen
- mediumslateblue
- mediumspringgreen
- mediumturquoise
- mediumvioletred
- midnightblue
- mintcream
- mistyrose
- moccasin
- navajowhite
- navy
- oldlace
- olive
- olivedrab
- orange
- orangered
- orchid
- palegoldenrod
- palegreen
- paleturquoise
- palevioletred
- papayawhip
- peachpuff
- peru
- pink
- plum
- powderblue
- purple
- rebeccapurple
- red
- rosybrown
- royalblue
- saddlebrown
- salmon
- sandybrown
- seagreen
- seashell
- sienna
- silver
- skyblue
- slateblue
- slategray
- snow
- springgreen
- steelblue
- tan
- teal
- thistle
- tomato
- turquoise
- violet
- wheat
- white
- whitesmoke
- yellow
- yellowgreen